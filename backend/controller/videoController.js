import { getCardPreviewData, getFullVideoAndAnalysisDetails } from "../services/videoService.js";
import analysisModel from "../model/analysisModel.js";

export const fetchCardData = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.json({
                success: false,
                message: 'Unauthorized Access!!'
            });
        }

        const page = Math.max(Number(req.query.page) || 1, 1);
        const limit = Math.max(Number(req.query.limit) || 12, 1);
        const skip = (page - 1) * limit;

        const [videos, total] = await Promise.all([
            getCardPreviewData(userId, { skip, limit }),
            analysisModel.countDocuments({ userId })
        ]);

        return res.json({
            success: true,
            totalVideos: total,
            page,
            limit,
            videos,
            message: videos.length > 0 ? 'All videos fetched successfully!!' : 'No videos found!!'
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Failed to fetch card data'
        });
    }
}

export const fetchFullVideoDetails = async (req, res)=>{
    try {
        const userId = req.userId;
        if(!userId){
            return res.json({
                success: false,
                message: 'Unauthorized Access!!'
            });
        }

        const {videoId} = req.params;
        if(!videoId || typeof videoId !== "string"){
            return res.json({
                success: false,
                message:"Invalid Video Id!!"
            });
        }

        const videoData = await getFullVideoAndAnalysisDetails(userId, videoId);

        if(!videoData){
            return res.json({
                success:false,
                message:'Video Not found!!'
            });
        }
        return res.json({
            success:true,
            videoData,
            message:'Video data fetched successfully!!'
        });
    } catch (error) {
        return res.json({
            success:false,
            message:'Failed to fetch video details!!'
        });
    }
}