import express from 'express';
import {userAuth} from '../middleware/userAuth.js';
import { fetchCardData, fetchFullVideoDetails } from '../controller/videoController.js';


const videoRouter = express.Router();

videoRouter.get('/cards', userAuth, fetchCardData);
videoRouter.get('/:videoId', userAuth, fetchFullVideoDetails);

export default videoRouter;