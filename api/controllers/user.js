'use strict';
const db = require('../models/index');
const jwt = require('jsonwebtoken');

class UserController {
  constructor() {}
  async create(req, res) {
    const { password, email, name, accountType } = req.body;
    const user = { password, email, name, accountType };
    try {
      const account = await db.user.create(user);
      const id = account.id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 10000,
      });
      return res.status(201).json({ auth: true, token: token });
    } catch (error) {
      console.log(error);
      return res.status(401).json(error);
    }
  }

  async all(_req, res) {
    return db.user
      .findAll()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(400).json(err));
  }

  async find(req, res) {
    let queries = req.query;
    if (queries.id) {
      return this.findById(queries.id, res);
    } else {
      return this.compositeQuery(queries, res);
    }
  }

  findById(userId, res) {
    return db.user
      .findAll({
        where: { id: userId },
      })
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(400).json(err));
  }

  compositeQuery(_queries, res) {
    return res.status(500).send('Not implemented');
  }
}

module.exports = new UserController();
