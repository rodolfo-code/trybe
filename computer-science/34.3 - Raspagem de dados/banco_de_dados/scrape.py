from parsel import Selector
import requests
from banco_dados import client

db = client.catalogue

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)

# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"
book_page_url = ""
descList = []

while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):

        book_page_url = product.css(".product_pod a::attr(href)").get()
        title = product.css("h3 a::attr(title)").get()

        response = requests.get(URL_BASE + book_page_url)
        selectorDesc = Selector(text=response.text)

        book_description = selectorDesc.css(
            "#product_description ~ p::text"
        ).get()

        book_data = {"title": title, "description": book_description}

        db.books.insert_one(book_data)

    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()

print(descList)
