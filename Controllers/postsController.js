const { Post, sequelize } = require('../models/');

const postsController = {
    index: async (req, res) => {
        let posts =  await Post.findAll();
        return res.render('index', {listaPosts: posts});
    },
    create: async (req, res) => {
        const {texto, img, usuarios_id, n_likes} = req.body;
        const post = {texto, img, usuarios_id, n_likes};
        let posts = await Post.create(post)
        return res.json(posts);
    },
    update: async (req, res) => {
        const {id} = req.params;
        const {texto, img, usuarios_id, n_likes} = req.body;
        let posts = await Post.update({texto, img, usuarios_id, n_likes}, {
            where: {id}
        });
        return res.send(posts);
    },
    delete: async (req, res) => {
        const {id} = req.params;        
        let posts = await Post.destroy({
            where: {id}
        });
        return res.json(posts);
    },
    show: async (req, res) => {
        const {usuarios_id} = req.params;
        let mostrarposts = await Post.findAll({where: {usuarios_id}});
        return res.json(mostrarposts);
    }
}

module.exports = postsController;