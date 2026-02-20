import { getCardPreviewData, getFullVideoAndAnalysisDetails } from "../services/videoService.js";

export const fetchCardData = async (req, res) => {
    try {
        const userId = req.user._id;
        if (!userId) {
            return res.json({
                success: false,
                message: 'Unauthorized Access!!'
            });
        }

        const videos = await getCardPreviewData(userId);

        if (!videos || videos.length === 0) {
            return res.json({
                success: false,
                message: 'No Video found!!'
            });
        }

        return res.json({
            success: true,
            totalVideos: videos.length,
            videos,
            message: 'All videos fetch successfully!!'
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
        const userId = req.user._id;
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