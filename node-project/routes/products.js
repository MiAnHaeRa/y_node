const express = require("express");
const router = express.Router();

//전체조회 ?category ?price
router.get("/", (req, res) => {
    let category = req.query.category;
    let price = req.query.price;

    category = category == null ? "" : category;
    price = price == null ? 0 : price;

    res.send(`Get Product!! category : ${category}, price : ${price}`);
});

//단건조회 /1
router.get("/:num", (req, res) => {
    let num = req.params.num;

    num = num == null ? 0 : num;

    res.send(`Get Product!! num : ${num}`);
});

//등록 (JSON) prodid, name, price
router.post("/", (req, res) => {
    const data = req.body;
    let prodid = data.prodid;
    let name = data.name;
    let price = data.price;
    
    prodid = prodid == null ? "" : prodid;
    name = name == null ? "" : name;
    price = price == null ? 0 : price;

    res.send(`Post Product!! prodid : ${prodid}, name : ${name}, price : ${price}`);
});

//수정 (JSON) prodname, price
router.put("/:num", (req, res) => {
    let num = req.params.num;
    let data = req.body;
    let prodname = data.prodname;
    let price = data.price;

    num = num == null ? 0 : num;
    prodname = prodname == null ? "" : prodname;
    price = price == null ? 0 : price;

    res.send(`Put Product!! num : ${num}, prodname : ${prodname}, price : ${price}`);
});

//삭제
router.delete("/:num", (req, res) => {
    let num = req.params.num;
    
    num = num == null ? 0 : num;
    if (num == 0) {
        res.send("No Data Product");
    } else {
        res.send("Deleted Product num : " + num);
    }
});

module.exports = router;