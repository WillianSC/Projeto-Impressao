from flask import jsonify

def register_ping_routes(app):
    @app.route('/ping')
    def ping():
        return jsonify({'message': 'pong'})
