try:
    arquivo = open("meus-personagens-favorito.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try

    file = open("meus-personagens-favoritos.txt", mode="r")
    content = file.read()

    print(content)

    file.close()
    print("arquivo manipulado e fechado com sucesso")
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")