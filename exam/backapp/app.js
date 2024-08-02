const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const port = 80;

//라우터
const customerRouter = require("./routes/customer.js");
const bookRouter = require("./routes/book.js");
const boardRouter = require("./routes/board.js");
const replyRouter = require("./routes/reply.js");

app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));                  //정적 파일위치 지정
app.use(express.urlencoded({ extended: false }));    //body-parse를 위함
app.use(express.json());                            //json패치
app.use(morgan("dev"));                            //로그 확인


//주소
app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.use("/customer", customerRouter);
app.use("/api/book", bookRouter);
app.use("/api/board", boardRouter);
app.use("/api/reply", replyRouter);


app.listen(port, () => {
    console.log(`서버 구동중!! http://localhost:${port}`);
})