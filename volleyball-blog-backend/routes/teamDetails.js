const express = require('express')
const axios= require('axios')//SERVE PER LE RICHIESTE HTTP
const router= express.Router()
require('dotenv').config()


router.get('/team/:id', async (req, res)=>{
    const id=req.params.id
    try{
        const response= await axios.get(`https://www.thesportsdb.com/api/v1/json/331685/lookup_all_teams.php?id=${id}` )
        res.json(response.data);
    } catch (error){
        console.error('ERRORE', error)
        res.status(500).json({error: 'ERRORE'})
    }
})

module.exports= router