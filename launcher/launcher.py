from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import subprocess

class Handler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()

    def do_POST(self):
        if self.path == "/launch":

            length = int(self.headers['Content-Length'])
            data = json.loads(self.rfile.read(length))

            game_id = data["game_id"]

            print("Launching Novetus game:", game_id)

            subprocess.Popen([
                "NovetusClient.exe",
                "--join",
                game_id
            ])

            self.send_response(200)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(b'{"status":"ok"}')

HTTPServer(("127.0.0.1", 49152), Handler).serve_forever()
