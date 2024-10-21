"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
const express_1 = require("express");
const router = (0, express_1.Router)();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
exports.default = router;
