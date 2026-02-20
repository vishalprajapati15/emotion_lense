import analysisModel from "../model/analysisModel.js";

export const getCardPreviewData = async (userId) => {
    const analysis = await analysisModel
        .find({ userId })
        .populate({
            path: "videoMetaDataId",
            select: "title channelName thumbnail views likes publishedAt"
        }).
        select(
            "videoId totalComments dominantSentimentLabel dominantEmotionLabel sentimentPositivePercentage sentimentNegativePercentage"
        )
        .sort({ createdAt: -1 })
        .lean();

    if (!analysis || analysis.length === 0) {
        throw new Error("No video found!!");
    }

    return analysis.map((item) => ({
        videoId: item.videoId,
        title: item.title,
        channelName: item.channelName,
        thumbnail: item.thumbnail,
        views: item.views,
        likes: item.likes,
        publishedAt: item.publishedAt,
        views: item.views,
        totalComments: item.totalComments,
        dominantSentiment: item.dominantSentimentLabel,
        dominantEmotion: item.dominantEmotionLabel,
        positivePercentage: item.sentimentPositivePercentage,
        negativePercentage: item.sentimentNegativePercentage
    }));
};

export const getFullVideoAndAnalysisDetails = async (userId, videoId) => {
    const analysis = await analysisModel
        .findOne({ userId, videoId })
        .populate("videoMetaDataId")
        .lean();

    if (!analysis) {
        throw new Error("Video Analysis not found!!");
    }

    return analysis;

};