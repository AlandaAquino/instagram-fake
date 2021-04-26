const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (req, res) => {
        let usuarios =  await Usuario.findAll();
        return res.render('usuarios', {listaUsuarios: usuarios});
    },
    create: async (req, res) => {
        const {nome, email, senha} = req.body;
        const usuario = {nome, email, senha};
        let usuarios = await Usuario.create(usuario)
        return res.json(usuarios);
    },
    update: async (req, res) => {
        const {id} = req.params;
        const {nome, email, senha} = req.body;
        let usuarios = await Usuario.update({nome, email, senha}, {
            where: {id}
        });
        return res.send(usuarios);
    },
    delete: async (req, res) => {
        const {id} = req.params;        
        let usuarios = await Usuario.destroy({
            where: {id}
        });
        return res.json(usuarios);
    }
}

module.exports = usuariosController;