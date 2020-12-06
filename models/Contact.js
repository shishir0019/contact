const { Sequelize } = require('sequelize');
const database = require('../config/sqlite');

module.exports = database.define('Contact', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sur_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    job: {
        type: Sequelize.STRING,
        allowNull: true
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: true
    },
    note: {
        type: Sequelize.STRING,
        allowNull: true
    },
    avatar_urls: {
        type: Sequelize.STRING,
        allowNull: true
    },
    meta: {
        type: Sequelize.STRING,
        allowNull: true
    }
})