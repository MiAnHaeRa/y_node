/**
 * router
 */

const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");

//전체조회 board?page=1
router.get("/", async (req, res) => {
    let page = req.query.page;
    page = !page ? 1 : page;

    let offset = (page - 1) * 10;
    let total = await mysql.query("boardCount")
    let result = await mysql.query("boardList", offset)
    res.send({ list: result, total: total[0].cnt });
});

//단건조회
router.get("/:seq", (req, res) => {
    const seq = req.params.seq;

    mysql.query("boardGet", { seq })
        .then(result => {
            res.send(result);
        });
})

//등록
router.post("/", (req, res) => {
    //seq, title 필수
    mysql.query("boardInsert", req.body)
        .then(result => {
            res.send(result);
        })
})

//수정
router.put("/:seq", (req, res) => {
    const seq = req.params.seq;

    mysql.query("boardUpdate", [req.body, { seq }])
        .then(result => {
            res.send(result);
        });
});

//삭제
router.delete("/:seq", (req, res) => {
    const seq = req.params.seq;

    mysql.query("boardDelete", { seq })
        .then(result => {
            res.send(result);
        });
});

module.exports = router;