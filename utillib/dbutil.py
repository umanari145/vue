import mysql.connector

#
# データベースへの接続
#
class Dbutil():

    def __init__(self, host, user, db, passwd):
        self.host = host
        self.user = user
        self.db = db
        self.passwd = passwd

        tmpCon = mysql.connector.connect(
            user = self.user,
            passwd = self.passwd,
            host = self.host,
            db = self.db
        )

        if tmpCon is not None:
            self.con = tmpCon
            self.cursor = tmpCon.cursor(dictionary=True, buffered=True)
    #
    # dbを閉じる
    #
    def close():
        self.cursor.close()
        self.con.close()

    #
    # select
    # @type string sql
    # @return dict 辞書型データ
    #
    def select(self, sql):
        self.cursor.execute(sql)
        rows = self.cursor.fetchall()
        data = []
        if len(rows) == 0:
            return None

        for row in rows:
            data.append(row)
        return data

    #
    # insert
    # @type string talbe テーブル名
    # @type dict dict 辞書型データ
    # @return int 影響された行数
    #
    def insert(self, table, dicts):
        columns = []
        prepears = []
        datas = []
        for column, value in dicts.items():
            columns.append(column)
            datas.append(value)
            prepears.append("%s")
        column_str = ','.join(columns)
        prepear_str = ','.join(prepears)
        sql  =" INSERT INTO %s (%s) VALUES (%s) " % (table, column_str, prepear_str)
        res = self.cursor.execute(sql, datas)
        return res

    #
    # bulk_insert
    # @type string talbe テーブル名
    # @type dict dict 辞書型データ
    # @return int 影響された行数
    #
    def bulk_insert(self, table, dictlists):
        columns = []
        prepears = []

        single_dict = dictlists[0]
        columns = single_dict.keys()
        column_str = ','.join(columns)
        tmp_prepears = []
        bind_vals =[]

        for dicts in dictlists:
            tmp_val = dicts.values()
            bind_vals.extend(tmp_val)
            #配列初期化
            tmp_prepears = ["%s"] * len(tmp_val)
            tmp_prepears_str = ",".join(tmp_prepears)
            prepears.append("(" + tmp_prepears_str + ")")

        prepear_str = ",".join(prepears)
        sql  =" INSERT INTO %s (%s) VALUES %s " % (table, column_str, prepear_str)
        res = self.cursor.execute(sql, bind_vals)
        return res

    #
    # update
    # @type string table テーブル名
    # @type dict updateDics 辞書型データ(更新データ)
    # @type dict keyDics キーになる辞書型データ
    # @return int 影響された行数
    #
    def update(self, table, update_dics, key_dics):

        columns = []
        bind_vals =[]
        for column, value in update_dics.items():
            columns.append(column + "=%s")
            bind_vals.append(value)

        wheres = []
        for wherekey,value2 in key_dics.items():
            wheres.append(wherekey +"=%s")
            bind_vals.append(value2)
        column_str = ','.join(columns)
        where_str = ','.join(wheres)

        sql  =" UPDATE %s SET %s WHERE %s " % (table, column_str, where_str)
        res = self.cursor.execute(sql, bind_vals)

        return res

    #
    # delete
    # @type string table テーブル名
    # @type dict keyDics キーになる辞書型データ
    # @return int 影響された行数
    #
    def delete(self, table, key_dics):
        wheres = []
        bind_vals = []
        for wherekey,value in key_dics.items():
            wheres.append(wherekey +"=%s")
            bind_vals.append(value)
        where_str = ",".join(wheres)
        sql  =" DELETE FROM %s WHERE %s " % (table, where_str)
        res = self.cursor.execute(sql, bind_vals)
        return res

    #
    # getLastInsertId
    # @return int id
    #
    def getLastInsertId(self):
        return self.con.insert_id()
