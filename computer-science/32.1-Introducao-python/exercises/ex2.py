lista = [1, 2, 3, 4, 5]


def media_aritmetica(list):
    count = 0
    for item in list:
        count += item

    return count / len(list)


print(media_aritmetica(lista))
