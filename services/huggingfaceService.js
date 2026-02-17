import { hfHeaders, hfModels } from "../config/huggingface.js";
import axios from "axios";

export const analyzeSentiment = async (texts)=>{
    const response = await axios.post(
        hfModels.sentiment,
        {inputs: texts},
        {headers: hfHeaders}
    );
    return response.data;
};


export const analyzeEmotion = async (texts)=>{
    const response = await axios.post(
        hfModels.emotion,
        {inputs: texts},
        {headers: hfHeaders}
    );
    return response.data;
}
