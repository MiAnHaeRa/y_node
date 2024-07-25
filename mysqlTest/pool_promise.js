//mysql 모듈 로드
const mysql = require("mysql2");

//mysql 접속 정보
const connInfo = {
    host : "127.0.0.1",
    port : "3306",
    user : "hr",
    password : "hr",
    database : "shop",
    connectionLimit: 10,
};

//db 커넥션 생성
let pool = mysql.createPool(connInfo);

function query(sql, data) {
    return new Promise((resolve, rejact) => {
        pool.query(sql, data, (err, results, feilds) => {
            if(err) {
                rejact(err);
            } else {
                resolve(results);
            }
        });
    });
}



module.exports = {pool, query};
