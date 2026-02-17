import express from 'express';


import { getComments } from '../controller/youtubeController.js';
import { analyzeComments } from '../controller/youtubeController.js';

const youtubeRouter = express.Router();

youtubeRouter.post('/get-comments', getComments);
youtubeRouter.post('/analyze', analyzeComments);

export default youtubeRouter;
