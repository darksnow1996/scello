const Sequelize = require('sequelize');
const sequelize = require('../loaders/postgres');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fname: {
        type: Sequelize.STRING,
       
        allowNull: true,

    },
    lname: {
        type: Sequelize.STRING,

        allowNull: false,

    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    email: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false,

    },

    

});

module.exports = User;