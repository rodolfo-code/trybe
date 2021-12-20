lista = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maior_nome(lista):
    maior = lista[0]
    for i in lista:
        if len(i) > len(maior):
            maior = i
    return maior

print(maior_nome(lista))
