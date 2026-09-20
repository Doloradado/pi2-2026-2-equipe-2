from fastapi import FastAPI
from pydantic import BaseModel

from ChatBot import Assistente

app = FastAPI(
    title= "API do ChatBot",
    description="API responsavel pelo atendimento do chatbot"
)

Assistente = Assistente("Assistente Virtual")

class Mensagem(BaseModel):
    telefone: str
    mensagem: str
    estado: str = "INICIO"

@app.post("/chat")
def conversar(dados: Mensagem):
    
    resposta = Assistente.responder(
        dados.mensagem,
        dados.estado
    )
    
    return resposta