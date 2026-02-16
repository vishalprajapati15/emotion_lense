import { extractVideoId, getYoutubeComments } from '../services/youtubeService.js';

export const getComments = async (req, res) => {
    try {
        const { youtubeUrl } = req.body;

        if (!youtubeUrl) {
            return res.json({
                success: false,
                message: 'YouTube URL is required!!'
            });
        }

        // Extract video ID from the URL
        const videoId = extractVideoId(youtubeUrl);

        // Fetch comments using the video ID
        const comments = await getYoutubeComments(videoId);

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
