const sql = {
    boardList: `select * from t_board_board order by no`,
    boardInfo: `select * from t_board_board where ?`,
    boardInsert: `insert into t_board_board set ?`,
    boardUpdate: `update t_board_board set ? where ?`,
    boardDelete: `delete from t_board_board where ?`,
    replyList: `select * from t_comment_board where ?`,
    replyInsert: `insert into t_comment_board set ?`,
    replyUpdate: `update t_comment_board set ? where ?`,
    replyDelete: `delete from t_comment_board where ?`,
    replyCount: `select bno, count(*) from t_comment_board group by bno;`
};

module.exports = sql;