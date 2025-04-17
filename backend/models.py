from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone

db = SQLAlchemy()

class Usuario(db.Model):
    __tablename__ = 'usuarios'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    senha_hash = db.Column(db.String(255), nullable=False)
    criado_em = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    impressoes = db.relationship('HistoricoImpressao', backref='usuario', lazy=True)
    creditos = db.relationship('Credito', backref='usuario', lazy=True)


class HistoricoImpressao(db.Model):
    __tablename__ = 'historico_impressoes'

    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    nome_arquivo = db.Column(db.String(255), nullable=False)
    status = db.Column(db.String(50), default='Pendente')
    paginas = db.Column(db.Integer, nullable=False)
    data_envio = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))


class Credito(db.Model):
    __tablename__ = 'creditos'

    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    saldo = db.Column(db.Float, default=0.0)
    atualizado_em = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))