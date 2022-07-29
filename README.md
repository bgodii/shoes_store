# Shoes-Store Admin

### Objetivo
Aplicação para administrar inventário de tenis disponiveis no banco de dados.

### Requisitos
 - Docker
 - Docker-Compose
 - Node
 - Python

### Execução
O projeto possui três principais containers. Sendo ele de banco de dados, frontend e backend, todos disponiveis através do docker.
Para executar o projeto, use o comando `docker-compose up -d --build`.

### Frontend
O frontend da aplicação, tem como objetivo de ser a interface principal do usuário.
Através dela, podemos adicionar novas entradas, editar, excluir e ver os disponiveis (CRUD).
Também é possivel adicionar novas entradas fazendo upload do arquivo .csv também disponivel na raiz do projeto.
Conseguimos acessa-lo através da url `https://localhost:3000/`

## Backend - API
API esta exposta na porta `8000`, logo é acessavel a partir do endereço `localhost:8080/`. Ela possui apenas alguns `endpoints`.



`POST: /api/token/`: Enpoint responsável pela autenticação no backend. Ele possui um usuário padrão que pode ser usado, nos retorna um token, que deve ser utilizado nos headers das demais requisições, como token Bearer. O usuário e senha padrão é:
```json
{
  "username":"admin",
  "password":"admin"
}
```
`POST | GET | UPDATE | DELETE: /api/shoes/`: Principal endpoint, nele é possivel adicionar, alterar, deletar e consultar os dados do banco.

`POST: /api/upload/`: Endpoint responsavel pelo upload do arquivo .CSV. Neste é importante trocar o tipo de requisição para `multpart` 


### Testes
A aplicação também possui alguns testes unitarios, para garantir o funcionamento de seus serviços, para executa-los utilize o comando: `docker container exec backend make tests`

### Tecnologias utilizadas
- [Python3](https://www.python.org/downloads/)
- [Django](https://www.djangoproject.com/)
- [pipenv](https://pypi.org/project/pipenv/) 
- [Docker](https://www.docker.com/) 
- [Docker Compose](https://docs.docker.com/compose/)
- [Django REST framework](https://www.django-rest-framework.org/)
- [Flake8](https://flake8.pycqa.org/en/latest/)
- [Black](https://github.com/psf/black)
- [REACT](https://pt-br.reactjs.org/)
- [Bulma](https://bulma.io/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

