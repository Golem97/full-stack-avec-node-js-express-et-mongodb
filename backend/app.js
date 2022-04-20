const express =require('express');

const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');

const userRoutes = require('./routes/user'); 

mongoose.connect('mongodb+srv://nathben97:D5p6856r@cluster0.mzp64.mongodb.net/Project0?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app= express(); 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(express.json());


app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes); 
module.exports =app;