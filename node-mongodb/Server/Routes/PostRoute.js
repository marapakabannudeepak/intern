import express from  "express"
import { CreatePost, DeletePost, GetPost, getTimeLinePosts, likePost, UpdatePost } from "../Controllers/PostController.js";
const router=express.Router();

router.post('/',CreatePost)
router.get('/:id',GetPost)
router.put('/:id',UpdatePost)
router.delete('/:id',DeletePost)
router.put('/:id/like',likePost)
router.get('/:id/timeline',getTimeLinePosts)

export default router;