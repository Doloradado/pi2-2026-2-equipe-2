class Assistente:

    def __init__(self, nome):
        self.nome = nome

    def responder(self, mensagem, estado="INICIO"):
        mensagem = str(mensagem).strip().lower()

        if estado == "INICIO":
            return {
                "resposta": "Ola, sou o assistente virtual.\nComo posso ajuda-lo?",
                "estado": "MENU_PRINCIPAL",
                "opcoes": [
                    "1 - Valores",
                    "2 - Duvidas",
                    "3 - Servicos",
                    "4 - Falar com o personal",
                ],
            }

        if estado == "MENU_PRINCIPAL":
            respostas = {
                "1": "Responde com os valores",
                "2": "Tenta responder a duvida do cliente",
                "3": "Diz quais servicos sao e como funciona",
                "4": "Encaminha para o personal",
            }

            if mensagem in respostas:
                return {
                    "resposta": respostas[mensagem],
                    "estado": "MENU_PRINCIPAL",
                }

            return {
                "resposta": "Opcao invalida. Escolha uma opcao do menu.",
                "estado": "MENU_PRINCIPAL",
            }

        return {
            "resposta": "Estado invalido.",
            "estado": "INICIO",
        }
