from socketserver import TCPServer, StreamRequestHandler


class TCPHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola cliente\n")
        while True:
            data = self.rfile.readline().strip().decode("utf-8")
            if not data:
                self.wfile.write(b"Cliente desconectado\n")
                print(self.rfile.readline().strip().decode("utf-8"))
                break
            print(data)


server_address = ("localhost", 3001)

with TCPServer(server_address, TCPHandler) as server:
    print("Server TCP ativo")
    server.serve_forever()
