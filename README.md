ChatBot de Atendimento em Python

Esse ChatBot foi criado pensado apenas em respostas automáticas, sem uso de LLM/IA, mas ainda é possível reutilizado.

Ele funciona baseado em fluxos, recebendo uma mensagem e identificando seu estado para retornar uma resposta.
Junto ao ChatBot também esta uma APIREST utilizando FastAPI para permitir a comunicação do Backend ao ChatBot.

Estrutura:
ChatBot.py: logica principal do ChatBot
Ele é responsavel por controlar o fluxo do atendimento, processar mensagens, controlar os estados e enviar respostas.

RoboAPI.py: permite utilizar o ChatBot através de uma APIREST, permitindo que o sistema do Backend envie mensagens ao ChatBot e receba as respostas.

requiraments.txt (sim, escrevi errado): onde esta as dependências necessárias para executar a API.

Para utilizar o ChatBot é necessário:
Python 3.10 ou superior
FastAPI
Uvicorn

Para a instalação:

clone o repositorio do github: https://github.com/Doloradado/pi2-2026-2-equipe-2.git

entre na pasta robo0.2: cd robo0.2

instale as dependências: pip install -r requiraments.txt ou pip install fastapi uvicorn

Para executar o programa faça:

dentro da pasta robo0.2, execute:
uvicorn RoboAPI:app --reload

por padrao, a API fica em: https://127.0.0.1:8000
depois, faça: https://127.0.0.1:8000/docs
Assim é possível testar os endpoints pelo navegador.

Endpoint:
No navegador, clique em POST/chat
depois em "try it out"

exemplo:

{
  "telefone":"88999999999",
  "mensagem":"Oi",
  "estado":"INICIO"
}'

a resposta: 
{
  "resposta": "Ola, sou o assistente virtual.\nComo posso ajuda-lo?",
  "estado": "MENU_PRINCIPAL",
  "opcoes": [
    "1 - Valores",
    "2 - Duvidas",
    "3 - Servicos",
    "4 - Falar com o personal"
  ]
}

A arquitetura desse ChatBot pode ser expandida e atualizada conforme a necessidade do projeto e a integração com o backend, banco de dados e Whatsapp seja implementada.

