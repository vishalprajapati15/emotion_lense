import fetch from 'node-fetch';
import { getCommentUrl } from '../config/youtube.js';


export const getYoutubeComments = async (videoId)=>{
    const url = getCommentUrl(videoId);
    const response = await fetch(url);

    const data = await response.json();

    if(!data.items){
        throw new Error('No comments found!!');
    }

    return data.items.map((item)=>{
        item.snippet.topLevelComment.snippet.textDisplay
    });
}