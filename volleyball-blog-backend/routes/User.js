const express =require('express');
const router=express.Router();
const User=require('../models/User')
const bcrypt= require('bcrypt')

router.post('/user/register',  async (req, res) => {
    try {
      const { username, email, password, } = req.body;
        
      // 1. Verifica se l'utente esiste già
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'Utente già registrato' });
      }
  
      // 2. Cripta la password con bcrypt
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // 3. Crea il nuovo utente nel DB
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });
  
      // 4. Risposta al frontend (senza password ovviamente)
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        createdAt: newUser.createdAt
      });
    } catch (error) {
      console.error('Errore nella registrazione:', error.message);
      res.status(500).json({ message: 'Errore del server' });
    }
  }
)

module.exports= router