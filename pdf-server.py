from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import os
import sys

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        return

if __name__ == '__main__':
    root = os.path.dirname(os.path.abspath(__file__))
    os.chdir(root)
    port = 8000
    server = ThreadingHTTPServer(('127.0.0.1', port), QuietHandler)
    print(f'Serving on http://127.0.0.1:{port}')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
