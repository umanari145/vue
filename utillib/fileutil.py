import requests
import yaml

def func1():
    print("func1desu")

#
# HTMLのダウンロード
# @type string url ダウンロードURL
# @return string 文字列
#
def downloadHTML(url):
    response = requests.get(url)
    response.encoding = response.apparent_encoding
    return response.text

#
# yamlファイルの読み込み
# @type string filepah ファイルパス
# @return hash yamlデータ
#
def loadYaml(filepath):
    fh = open(filepath, "r+", encoding="utf-8")
    data = None
    if fh is not None:
        data = yaml.load(fh)
    return data
