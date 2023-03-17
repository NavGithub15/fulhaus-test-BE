const express = require('express');
const router = express.Router();
const fs = require('fs')
const { v4: uuid } = require('uuid');

const data = require('../data/data');

router.route('/').get( (req, res) => {
    res.json(data)
})

module.exports= router