class Customer:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self._pin = "123"

    def setPassword(self, newPin):
        pass

    def verifyPassword(self, pin):
        pass

    def show(self):
        print(f"Cliente: {self.name} Email: {self.email}")


cliente1 = Customer("rodolfo", "rodolfo@gmail.com")

# print(cliente1.name)
