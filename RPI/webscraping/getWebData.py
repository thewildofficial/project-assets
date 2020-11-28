#I imported as bs cause funny
import json
import os

from bs4 import BeautifulSoup as BS
from urllib.request import urlopen
def retriveData(webpageIP,outputJsonFileName,htmlTag):
    try:
        html = urlopen(webpageIP)
    except Exception:
        THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
        file = os.path.join(THIS_FOLDER, webpageIP) #here webpageIP is actually a local webpage file
        with open(file, "r") as f:
            html = f.read()

    soup = BS(html,features="html.parser")
    tds = soup.find_all(htmlTag)
    texts = []
    for td in tds:
        inner_text = td.text
        texts.append(inner_text)

    with open(f'{outputJsonFileName}.json', 'w') as f:
        json.dump(texts, f)
    print("done!")




"""
example case:
    retriveData("testSite.html","test","p")
"""
