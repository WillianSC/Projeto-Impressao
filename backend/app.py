from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import db
from routes import register_routes


app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:/projeto-impressao/backend/instance/banco.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/")
def index():
    return "API funcionando!"

if __name__ == "__main__":
    app.run(debug=True)