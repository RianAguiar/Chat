# Estudo antes de cmc react 

Ordem ideal de estudo

Eu recomendaria:

JavaScript básico
JavaScript assíncrono
HTTP + APIs REST
React básico
useState
useEffect
fetch / axios
CRUD completo

React Router — rotas de tela
Cuida do que o usuário vê. Roda completamente no navegador, sem bater no servidor.

Django — rotas de dados
Cuida do que o usuário recebe. Tem dois tipos:
python# urls.py — rotas HTTP (REST)
path('api/salas/', criar_sala),       # cria uma sala nova
path('api/salas/<str:codigo>/', verificar_sala),  # verifica se sala existe

# routing.py — rotas WebSocket
re_path(r'ws/chat/(?P<room_name>\w+)/$', ChatConsumer.as_asgi())