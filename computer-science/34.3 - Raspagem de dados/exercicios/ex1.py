import requests

content = requests.get("https://httpbin.org/encoding/utf8").text

print(content)
