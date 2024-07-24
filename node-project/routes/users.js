const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    let page = req.query.page;
    let search = req.query.search;

    page = page == null ? 1 : page;
    search = search == null ? "" : search;

    const data = req.query;
    console.log(data);
    res.send(`Hello Get Users! page : ${page}, search : ${search}`);
});

router.get("/:username", (req, res) => {
    const username = req.params.username;
    console.log(username);
    res.send(`Hello Get ${username} Users!`);
});

router.post("/", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const addr = req.body.addr;

    res.send(`Hello Post Users! name : ${username}, addr : ${addr}`);
});

router.put("/:userid", (req, res) => {
    let userid = req.params.userid;
    const data = req.body;
    const result = {userid, ...data}
    res.send(result);
});

router.delete("/:userid", (req, res) => {
    let userid = req.params.userid;
    res.send("Delete User! 삭제번호 : " + userid);
});

module.exports = router;