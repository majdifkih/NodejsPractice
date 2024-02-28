const express = require('express');
const app = express.Router();
const Post=require('../models/post');

// cree un post
app.post('/addpost', async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(200).json({ message: 'Post créé avec succès', newPost});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Lister tous les posts
app.get('/allpost', async (req, res) => {
    try {
      const posts = await Post.find({});
      res.status(200).json({ posts });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
// Recuperer un post spécifique par son id
app.get('/onepost/:id', async (req, res) => {
    try {
        //Chercher un post par l'id
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Post introuvable" });
      }
      res.status(200).json({ post });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

// Modifier un post
app.put('/updatpost/:id', async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!post) {
        return res.status(404).json({ error: "Post introuvable" });
      }
      res.status(200).json({ message: 'Post modifié avec succès', post });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  
// Supprimer un post
app.delete('/delpost/:id', async (req, res) => {
    try {
        // Chercher un post par l'id et le supprimer
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post non trouvé' });
        }
        res.status(200).json({ message: 'Post supprimé avec succès', post });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




module.exports = app;