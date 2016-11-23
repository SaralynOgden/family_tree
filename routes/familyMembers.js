'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');


// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;
    // You can now access the payload via req.token.userId
    next();
  });
};

router.get('/familyMember', authorize, (req,res,next) => {
  const userId = req.token.userId;
  knex('family_member')
  .innerJoin('users', 'user.id', 'family_member.user_id')
  .where('user_id', userId)
  .then((family) => {
      res.send(family)
  })
  .catch((err) => {
   next(err);
 });
});

module.exports = router;
