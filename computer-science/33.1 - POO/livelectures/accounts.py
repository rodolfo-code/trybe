class Account:
    def __init__(self, customers, number, balance=0):
        self._balance = balance
        self._customers = customers
        self._number = number
        self._transactions = []
        self.deposite(balance)

    def status(self):
        print(f"Numero da conta: {self._number} Saldo: {self._balance}")

    def withdraw(self, amount):
        if self._balance >= amount:
            self._balance -= amount
            self._transactions.append(["WITHDRAW", amount])

    def deposite(self, amount):
        self._balance += amount
        self._transactions.append(["DEPOSIT", amount])

    def details(self):
        print(f"Extrato da conta: {self._number}\n")
        for t in self._transactions:
            print(f"{t[0]:10s} {t[1]:10.2f}")
        print(f"\n Saldo: {self._balance:10.2f}\n")
