characters_file = open('meus-personagens-favoritos.txt', mode="w")

characters_file.write('Tio Ptinhas\n')
characters_file.write('Lion\n')
characters_file.write('Neo\n')

print('Batman', file=characters_file)

more_characters = ['Klark\n', 'Robin\n', 'Aranha\n']

characters_file.writelines(more_characters)


characters_file.close()

file = open("meus-personagens-favoritos.txt", mode="r")

# content = file.read()

for i in file:
    print(i)

file.close()