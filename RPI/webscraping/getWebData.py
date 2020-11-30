#I imported as bs cause funny
import json
import os
from bs4 import BeautifulSoup as BS
from urllib.request import urlopen
import ast
def retriveData(webpageIP,outputJsonFileName,htmlTags):
    try:
        html = urlopen(webpageIP)
    except Exception:
        THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
        file = os.path.join(THIS_FOLDER, webpageIP) #here webpageIP is actually a local webpage file
        with open(file, "r") as f:
            html = f.read()
    texts = {}
    soup = BS(html,features="html.parser")
    for htmlTag in ast.literal_eval(htmlTags):
        tds = soup.find_all(htmlTag)
        for td in tds:
            if htmlTag == "div":
                texts[td.get("class")[0]] = td.text
            elif htmlTag == "img":
                texts["imageLink"] = td.get("src")


    with open(f'{outputJsonFileName}.json', 'w') as f:
        json.dump(texts, f)

    print("done!")




"""
example case:
    retriveData("testSite.html","test","p")
"""
if __name__ == "__main__":
        webpageIP = input("enter the website link or name:")
        outputJsonFileName = input("what should the json file be called?:")
        htmlTags = input("enter a PYTHON LIST of html tags to be scrapped:")
        retriveData(webpageIP,outputJsonFileName,htmlTags)
