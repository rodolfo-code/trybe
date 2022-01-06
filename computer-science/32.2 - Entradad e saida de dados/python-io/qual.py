import random 

random_number = random.randint(1, 2)

guess = ""

while random_number != guess:
    guess = int(input('Seu palpite: '))

print('O numero sorteado era: ', guess)
