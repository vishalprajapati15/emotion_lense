import { extractVideoId, getYoutubeComments } from '../services/youtubeService.js';
import { analyzeSentiment, analyzeEmotion } from '../services/huggingfaceService.js';

export const getComments = async (req, res) => {
    try {
        const { youtubeUrl } = req.body;
        console.log("Youtube : ", youtubeUrl)

        if (!youtubeUrl) {
            return res.json({
                success: false,
                message: 'YouTube URL is required!!'
            });
        }

        // Extract video ID from the URL
        const videoId = extractVideoId(youtubeUrl);
        console.log("videoId : ", videoId)

        // Fetch comments using the video ID
        const comments = await getYoutubeComments(videoId);
        console.log("comments : ", comments)
        
        return res.json({
            success: true,
            videoId,
            comments,
            message: 'Comments fetched successfully!!'
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export const analyzeComments = async (req, res)=>{
    try {
        const {youtubeUrl} = req.body;

        if(!youtubeUrl){
            return res.json({
                success: false,
                message: "YouTube URL is required!!"
            });
        }

        const videoId = extractVideoId(youtubeUrl);

        const comments = await getYoutubeComments(videoId);
        const sentiments = await analyzeSentiment(comments);
        console.log("sentiments : ", sentiments)
        const emotions = await analyzeEmotion(comments);
        console.log("emotions : ", emotions)

        return res.json({
            success: true,
            totalComments: comments.length,
            sentiments,
            emotions,
            message: "Comments analyzed successfully!!"
        });

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}
