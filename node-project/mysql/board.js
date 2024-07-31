/**
 * SQL문(board)
 */

const sql = {
    boardList: `select * from board order by seq desc limit ?, 10`,
    boardGet: `select * from board where ?`,
    boardInsert: `insert into board set ?`,
    boardUpdate: `update board set ? where ?`,
    boardDelete: `delete from board where ?`,
    boardCount: `select count(*) as cnt from board`,
};

module.exports = sql;