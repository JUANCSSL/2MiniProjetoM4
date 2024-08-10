const alimentos = require('../models/foodModels');

const obterCafeDaManha = (req, res) => {
    res.jason({ refeicao: "Café da Manhã", sugestoes: alimentos.cafeDaManha });
};

const obterAlmoco = (req, res) => {
    res.jason({refeicao: "Almoço", sugestoes: alimentos.almoco });
};

const obterJantar = (req, res) => {
    res.jason({ refeicao: "Jantar", sugestoes: alimentos.jantar });
};

module.exports = {
    obterCafeDaManha,
    obterAlmoco,
    obterJantar
};