const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

//라우터
const userRouter = require("./routes/users.js");
const productRouter = require("./routes/products.js");

app.use(cors());
app.use(express.static("public"));                  //정적 파일위치 지정
app.use(express.urlencoded({extended : false}));    //body-parse를 위함
app.use(express.json());                            //json패치

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

//주소
app.use("/member", userRouter);
app.use("/product", productRouter);

app.listen(port, () => {
    console.log(`서버 구동중!! http://localhost:${port}`);
})