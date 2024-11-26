# Use a imagem do Node.js
FROM node:16-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package.json ./
COPY tsconfig.json ./

# Instala as dependências
RUN npm install

# Copia todo o código-fonte
COPY . .

# Exponha a porta para o frontend
EXPOSE 3000

# Comando para rodar o aplicativo
CMD ["npm", "start"]
