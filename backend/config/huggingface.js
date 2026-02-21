import { InferenceClient } from "@huggingface/inference";

const hf = new InferenceClient(process.env.HUGGING_FACE_TOKEN);


export default hf;

export const models = {
    sentiment: "distilbert-base-uncased-finetuned-sst-2-english",
    emotion: "j-hartmann/emotion-english-distilroberta-base"
};