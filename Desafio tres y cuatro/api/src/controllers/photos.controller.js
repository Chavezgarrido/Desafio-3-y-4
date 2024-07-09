import { borrarPostModel, crearPostModel, obtenerPostsModel } from "../models/photos.models.js";

export const obtenerPosts = async (req,res) => {
    try{
        const fotos = await obtenerPostsModel();
        res.status(200).json({ posts: fotos })
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
};


export const crearPost = async (req, res) => {
    try{
        const { post } = req.body;
        const nuevoPost = await crearPostModel(post)
        res.status(201).json({post: nuevoPost});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

export const borrarPost = async (id) => {
    try{
        const { post } = req.body;
        const borrarPosts = await borrarPostModel();
        res.status(200).json({post: borrarPost});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};