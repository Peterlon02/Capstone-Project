
//IMPORTA I MODULI NECESSARI PER IL NOSTRO SERVER
const express = require('express') //CREA IL SERVER WEB 
const bodyParser = require('body-parser') //GESTISCE I DATI DEL CORPO DELLE RICHIESTE HTTP
const cors = require('cors') //ABILITA LE RICHIESTE CROSS-ORIGIN
const mongoose = require('mongoose') //CONNETTE A MONGODB
const articoliRoutes = require('./routes/articoliRoutes')
const highlights =require('./routes/highlights')
const leagues = require('./routes/allLeagues')
const team= require('./routes/teamDetails')
const players= require('./routes/listPlayer')
const seasons=require('./routes/seasons')
const events=require('./routes/allEvents')

require('dotenv').config() //GESTISCE LE VARIABILI D'AMBIENTE   

const app = express()
const port = process.env.PORT || 5000

//MIDDLEWARE
app.use(cors()) //CONSENTE RICHIESTE DA ALTRI DOMINI
app.use(bodyParser.json()) //CONSENTE AL SERVER DI ANALIZZARE I DATI JSON INVIATI NELLE RICHIESTE   

//  CONNESSIONE AL DATABASE
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('MongoDB connected'))
    .catch(err => console.log(err))


//IMPORTA I ROUTER
app.use('/api', articoliRoutes)
app.use('/api', highlights)
app.use('/api', leagues)
app.use('/api', team)
app.use('/api', players)
app.use('/api', seasons)
app.use('/api', events)


//AVVIA IL SERVER E ASCOLTA SULLA PORTA DEFINITA
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})