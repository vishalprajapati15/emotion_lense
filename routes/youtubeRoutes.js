import express from 'express';


import { getComments } from '../controller/youtubeController.js';

const youtubeRouter = express.Router();

youtubeRouter.post('/comments', getComments);

export default youtubeRouter;
