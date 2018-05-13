#!/Users/matsumoto/.pyenv/versions/3.6.0/bin/python

from utillib.dbutil import Dbutil
import utillib.fileutil as fileutil
import cgi
import json
import cgitb

cgitb.enable()
print('Content-Type:application/json;charset=utf-8\n\n')

data = fileutil.loadYaml("config.yaml")
dbinfo = data["dbinfo"]
db = Dbutil(dbinfo["host"], dbinfo["user"], dbinfo["db"], dbinfo["pass"])

class KEN():

    #コンストラクタ
    def __init__(self ,db):
      self.db = db
      # selfないとだめ

    def getPrefList(self):
        sql = 'SELECT DISTINCT(pref) AS pref FROM postcode'
        datas = db.select(sql)
        return list(map(lambda data: data['pref'], datas))

    def getCityList(self, pref):
        sql = " SELECT DISTINCT(city) AS city FROM postcode WHERE pref = '" + pref + "'"
        datas = db.select(sql)
        return list(map(lambda data: data['city'], datas))

    def getTownList(self, pref, city):
        sql = " SELECT DISTINCT(town) AS town FROM postcode WHERE pref = '" + pref + "' AND city = '" + city + "'"
        datas = db.select(sql)
        return list(map(lambda data: data['town'], datas))

form = cgi.FieldStorage()
areaType = form.getvalue("area_type")

ken = KEN(db)
res = None

if areaType != None:
    if areaType == 'pref':
        res = ken.getPrefList()
    elif areaType == 'city':
        pref = form.getvalue('pref')
        if pref != None:
            res = ken.getCityList(pref)
    elif areaType == 'town':
        pref = form.getvalue('pref')
        city = form.getvalue('city')
        if pref != None and city != None:
            res = ken.getTownList(pref, city)

if res != None:
    print(json.dumps(res))
