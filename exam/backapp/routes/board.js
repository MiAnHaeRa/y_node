const express = require('express');
let router = express.Router();
const mysql = require('../mysql/pool');

router.get("/", (req, res) => {
    mysql.query("boardList")
        .then(result => res.send(result))
});

router.get("/:no", (req, res) => {
    const no = req.params.no;
    console.log(no)

    mysql.query("boardInfo", { no })
        .then(result => res.send(result));
});

router.post("/", (req, res) => {
    mysql.query("boardInsert", req.body)
        .then(result => res.send(result))
});

router.put("/:no", (req, res) => {
    const no = req.params.no;

    mysql.query("boardUpdate", [req.body, { no }])
        .then(result => res.send(result));
});

router.delete("/:no", (req, res) => {
    const no = req.params.no;

    mysql.query("boardUpdate", { no })
        .then(result => res.send(result));
});

module.exports = router;