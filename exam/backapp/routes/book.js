const express = require('express');
let router = express.Router();
const mysql = require('../mysql/pool');

//전체조회
router.get("/", (req, res) => {
    mysql.query("bookList")
        .then(result => res.send(result));
});

//단건조회
router.get("/:no", (req, res) => {
    const no = req.params.no;
    mysql.query("bookInfo", { no })
        .then(result => res.send(result))
});

//등록
router.post("/", (req, res) => {
    mysql.query("bookInsert", req.body)
        .then(result => res.send(result))
});

//수정
router.put("/:no", (req, res) => {
    const no = req.params.no;
    mysql.query("bookUpdate", [req.body, { no }])
        .then(result => res.send(result))
})

//삭제
router.delete("/:no", (req, res) => {
    const no = req.params.no;
    mysql.query("bookDelete", { no })
        .then(result => res.send(result))
})

module.exports = router;