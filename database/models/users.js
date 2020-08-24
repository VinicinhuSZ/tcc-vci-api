/* jshint indent: 2 */
const { db , Sequelize } = require('../../config/objetos');



const Users = db.define('users', {
    iduser: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_user: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email_user: {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    },
    password_user: {
      type: Sequelize.STRING,
      allowNull: false
    },
    admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    Sequelize,
    tableName: 'users',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    schema: 'public'
  });

module.exports = Users;