PI = 3.14


def square(side):
    return side * side


def rectangle(length, width):
    return length * width


def circle(radius):
    return PI * radius * radius


if __name__ == "__main__":
    print("Área de quadrado:", square(10))
    print("Área de retângulo:", rectangle(2, 2))
    print("Área de círculo:", circle(3))
