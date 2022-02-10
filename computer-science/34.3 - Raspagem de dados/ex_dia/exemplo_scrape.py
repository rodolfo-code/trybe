from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com/")
# print(response.text)

selector = Selector(text=response.text)

# print(selector.css('article.product_pod h3 a::attr(title)').getall())


thumb_url_selector = "div.image_container a::attr(href)"
for url in selector.css(thumb_url_selector).getall():
    thumbnail_request = requests.get("http://books.toscrape.com/" + url)
    thumbnail_selector = Selector(text=thumbnail_request.text)
    book_title = thumbnail_selector.css('div.product_main h1')
    print(book_title.get())



