from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
# busca um documento da coleção, sem filtros
# print(db.books.find_one())
# busca utilizando filtros
for book in db.books.find({"title": {"$regex": "Attic"}}):
    print(book["title"])
client.close()  # fecha a conexão com o banco de dados
