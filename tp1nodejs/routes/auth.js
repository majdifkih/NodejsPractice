const express = require('express');
const User = require('../models/User');
const app = express.Router();
app.use(express.json());

//Authentification
app.post('/login', async (req, res) => {
         const { username, password } = req.body;

         try {
            // verifier si l'utilisateur existe
            const user = await User.findOne({ username });

            if (user && user.password === password) {
               //login avec succès
               res.status(200).json({ message: 'Utilisateur authentifié avec succès' });
            } else {
               // identifiants incorrects
               res.status(401).json({ message: 'Username ou password est incorrect' });
            }
         } catch (error) {
            // erreur serveur
            res.status(500).json({ message: 'Internal server error' });
         }
});

      
//Inscription

app.post('/register', async(req, res) => {
   
      const { username, password } = req.body;

      try {
         // verifier si l'utilisateur existe
         const existingUser = await User.findOne({ username });

         if (existingUser) {
            // utilisateur existe déjà
            res.status(409).json({ message: 'Utilisateur existe déjà' });
         } else {
            // créer un nouvel utilisateur
            const newUser = new User({ username, password });
            await newUser.save();

            res.status(201).json({ message: 'Inscription avec succès' });
         }
      } catch (error) {
         // erreur serveur
         res.status(500).json({ message: 'Internal server error' });
      }
  
});

// déconnexion
app.post('/logout', (req, res) => {
      // détruire la session
      req.session.destroy((err) => {
         if (err) {
            res.status(500).json({ message: 'Échec la déconnexion' });
         } else {
            res.status(200).json({ message: 'Utilisateur déconnecté avec succès' });
         }
      });
  
});


module.exports = app;
