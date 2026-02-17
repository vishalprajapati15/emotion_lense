const huggingFaceApiKey = process.env.HUGGING_FACE_TOKEN;
console.log('huggingFaceApiKey : ', huggingFaceApiKey);

export const hfHeaders = {
    Authorization: `Bearer ${huggingFaceApiKey}`,
    "Content-Type": "application/json"
};

export const hfModels = {
    sentiment : "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
    emotion:  "https://api-inference.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base"
};