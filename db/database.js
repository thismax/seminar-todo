const Sequelize = require('sequelize');
const url = 'postgres://odewpgko:Gx6SK1I5Z8Sz_idIHyWYBTTGliATAgvR@baasu.db.elephantsql.com:5432/odewpgko';
const orm = new Sequelize(url);

var Todo = orm.define('Todo', {
  text: Sequelize.STRING,
  completed: Sequelize.BOOLEAN
});

exports.Todo = Todo;
