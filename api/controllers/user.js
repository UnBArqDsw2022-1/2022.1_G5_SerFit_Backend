'use strict';
const db = require('../models/index');
const jwt = require('jsonwebtoken');

/**
 * Invenção Pura
 * Indireção
 * Mediator
 */
class UserController {
  constructor() {}
  async create(req, res) {
    const { password, email, name, accountType, mainInterest } = req.body;
    const user = { password, email, name, accountType, mainInterest};
    try {
      const account = await db.user.create(user);
      const id = account.id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 10000,
      });
      return res.status(201).json({ auth: true, token: token, id: id });
    } catch (error) {
      console.log(error);
      return res.status(401).json(error);
    }
  }

  async get(req, res) {
    const { id } = req.params;
        try {
            const exercise = await db.user.findOne({ where: { id: id } });
            return res.status(200).json(exercise);
        } catch (error) {
            console.log(error);
            return res.status(401).json(error);
        }
  }

  async all(_req, res) {
    return db.user
      .findAll()
      .then((users) => res.status(202).json(users))
      .catch((err) => res.status(400).json(err));
  }

  async find(req, res) {
    let queries = req.query;
    if (queries.id) {
      return this.findById(queries.id, res)
        .then((user) => res.status(202).json(user))
        .catch((err) => res.status(400).json(err));
    } else {
      return this.compositeQuery(queries, res);
    }
  }

  async update(req, res) {
    return this.findById(req.params.id, res)
      .then((user) => {
        user.update(req.body);
        return res.status(203).json(user);
      })
      .catch((err) => res.status(400).send(err));
  }

  findById(userId, _res) {
    return db.user
      .findOne({
        where: { id: userId },
      })
      .then((user) => Promise.resolve(user))
      .catch((err) => Promise.reject(err));
  }

  compositeQuery(queries, res) {
    let queryObj = {};
    Object.keys(queries).forEach((query) => {
      queryObj[query] = queries[query];
    });
      return db.user
        .findAll({
          where: queryObj,
        })
        .then((queryResult) => res.status(202).json(queryResult))
        .catch((err) => res.status(400).json(err));
  }
}

module.exports = new UserController();
