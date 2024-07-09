import { Router } from 'express';
import { borrarPost, crearPost, obtenerPosts } from '../controllers/photos.controller.js'


const router = Router()

router.get('/', obtenerPosts);

router.get('/posts', obtenerPosts);

router.post('/posts', crearPost);

router.delete('/posts', borrarPost);

export default router;

