const express = require('express');
let router = express.Router();
const mysql = require('../mysql/pool');

router.get(("/"), (req, res) => {
    mysql.query("replyCount")
        .then(result => res.send(result));
})

router.get("/:bno", async (req, res) => {
    const { bno } = req.params.bno;

    mysql.query("replyList", { bno })
        .then(result => res.send(result));
});

router.post("/", (req, res) => {
    mysql.query("replyInsert", req.body)
        .then(result => res.send(result))
});

router.put("/:bno", (req, res) => {
    const { bno } = req.params.bno;

    mysql.query("replyUpdate", [req.body, { bno }])
        .then(result => res.send(result));
});

router.delete("/:bno", (req, res) => {
    const { bno } = req.params.bno;

    mysql.query("replyUpdate", { bno })
        .then(result => res.send(result));
});

module.exports = router;