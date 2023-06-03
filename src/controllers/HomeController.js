const Test = require("../models/TestModel");
const User = require("../models/UserModel");
const bcrypt = require('bcrypt');

module.exports = {
    index : async (req, res, next) => {
        // const user = UserModel.create({name : 'test', address:'test'});
        console.log(User);
        const list = await User.findAll({include:Test});
        res.send(list);
        // res.render('home/index', {title : 'test'});
    },
    new :(req, res) => {
        res.render('home/new');
    },
    add: async (req, res) => {
        const data = req.body;
        const password = await bcrypt.hash('Admin@123', 5);
        const user = User.build({name : data.name, address : data.address, username : 'admin@gmail.com', password});
        console.log(user);
        await user.save();
        res.redirect('/');
    },
    edit: async (req, res) => {
        const id = req.params.id;
        const user = await User.findByPk(id);
        res.send(user);
    },
    delete: async(req, res) => {
        const id = req.params.id;
        const user = await User.findByPk(id);
        user.destroy();
        res.redirect('/');
    },
    test: async(req,res) => {
        const list = await Test.findAll({include:User});
        res.send(list);
    }
}