from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Mensagem, Sala
from .serializers import MensagemSerializer, SalaSerializer


#Buscar sala, ver se existe, se existir envia o usuario para essa sala e resgata as mensagens enteriores,
# se n existir cria automaticamente a sala e envia o usuario para ela
class SalaAPIView(APIView):
    def get(self, nome): 
        sala = Sala.objects.get_or_create(nome=nome)
        serializer = SalaSerializer(sala)
        return Response(serializer.data)

class MensagensAPIView(APIView):
    def get(self):
        mensagens = Mensagem.objects.filter(Sala=Sala)
        serializer = MensagemSerializer(mensagens, many=True)
        return Response(serializer.data)
    
    def post(self, request, id):
        sala = Sala.objects.get(id=id)
        mensagem = Mensagem.objects.create(
            sala = sala,
            username = request.data.get('username'),
            conteudo = request.data.get('conteudo'),
            enviado_as = request.data('enviado_as'),
            )
        serializer = MensagemSerializer(mensagem)
        return Response(serializer.data, status=201)
