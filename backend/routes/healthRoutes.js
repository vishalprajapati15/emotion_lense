import express from 'express';

const healthRouter = express.Router();

healthRouter.get('/ping', (req, res)=>{
    res.json({
        success: true,
        message:'Server is Alive!!'
    });
});
export default healthRouter;