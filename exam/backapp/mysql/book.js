const sql = {
    bookList: `select * from t_book`,
    bookInfo: `select * from t_book where ?`,
    bookInsert: `insert into t_book set ?`,
    bookUpdate: `update t_book set ? where ?`,
    bookDelete: `delete from t_book where ?`
};

module.exports = sql;