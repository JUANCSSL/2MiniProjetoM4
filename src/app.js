const express = require('express');
const app = express();
const rotasAlimentos = require('./router/foodRouter');

app.use('/api/alimentos', rotasAlimentos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server está rodando na porta ${PORT}`)
});