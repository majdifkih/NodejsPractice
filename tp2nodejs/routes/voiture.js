const express = require('express');
const router = express.Router();

const voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}];
//afficher tous les voitures
router.get('/all', (req, res) =>{
   res.json(voitures);
    

});

//ajouter une voiture
router.post('/add', (req, res) =>{
    const id=req.body.id;
    const name=req.body.name;
    voitures.push({id:id, name:name});
    console.log("Une voiture a été ajoutée");
});
//modifier une voiture
router.put('/edit/:id', (req, res) =>{
    const name=req.body.name;
    const id=req.body.id;
    if (voitures.id === req.params.id) {
        voitures[id]= name;
    }
    console.log("Une voiture a été modifiée");

   
});
//supprimer une voiture
router.delete('/delete/:id', (req, res) =>{
    
    if(voitures.id === req.params.id)
    voitures.delete({id:id});
    console.log("Une voiture a été supprimé");
});

module.exports = router;