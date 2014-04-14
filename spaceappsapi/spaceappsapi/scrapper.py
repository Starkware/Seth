form bs4 import BeautifulSoup as scrap
from requests import get


url = "http://www.esa.int/ESA/Our_Missions"
soup = scrap(requests.get(url).text)

missions =[]




general =  soup.find_all("div",'mis_item')

for n in general:
    tmp = n.find_all("div")
    fd = str(tmp[0].select('a')[0])
    if '<br/>' in fd:
        missions.append({
            'name':fd[fd.index('<span>')+len('<span>'):fd.index('</span>')],
            'date':fd[fd.index('</span>')+len('</span>'):fd.index('<br/>')],
            'description':fd[fd.index('<br/>')+len('<br/>'):fd.index('</a>')],
            'link':tmp[0].find("a")['href'],
            'image': 'http://www.esa.int'+tmp[1].find("a").find('img')['src'],
            })
    else:
        missions.append({
            'name': fd[fd.index('<span>')+len('<span>'):fd.index('</span>')],
            'description': fd[fd.index('</span>')+len('</span>'):fd.index('</a>')],
            'link':tmp[0].find("a")['href'],
            'image': 'http://www.esa.int'+tmp[1].find("a").find('img')['src']
            })


