# CRUD COM NODE.JS

- __C__ - Create (Criar)
- __R__ - Read (Ler)
- __U__ - Update (Atualizar)
- __D__ - Delete (Apagar)

__CRUD__ é usado para descrever as operações básicas que podem ser feitas em qualquer fonte de dados, seja ela um banco de dados relacional, um banco de dados não relacional, uma API, uma planilha, um arquivo ou qualquer outra coisa que armazene informações. CRUD também é usado para definir os requisitos funcionais de um sistema ou aplicação que manipula dados.

## Exemplo de CRUD com um sistema de cadastro (sem autenticação)

- Nome 
- Idade 
- Telefone 

## Dependências do projeto:
```javascript
# Iniciar projeto
npm init # Isso vai gerar o package.json

# Express
npm install express

# Mysql
npm install mysql
```

## Mysql no Docker
```bash

# Para baixar e rodar o container
docker-compose up

# Para acessar o mysql no docker
docker exec -it <id> bash

```
## Estrutura do banco
```mysql
    CREATE TABLE usuarios ( 
        id INT NOT NULL AUTO_INCREMENT,
        nome VARCHAR(20) NOT NULL,
        idade INT NOT NULL,
        telefone VARCHAR(20) NOT NULL,
        PRIMARY KEY (id)
    );
```
</br></br>

# Operações e testes com postman


![create](/img/postman/create.png)
</br>

![read](/img/postman/read.png)
</br>

![update](/img/postman/update.png)
</br>

![delete](/img/postman/delete.png)
</br>

## Categoria
**backend**