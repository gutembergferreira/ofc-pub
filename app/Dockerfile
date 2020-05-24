# Imagem base
FROM node:alpine

WORKDIR /usr/app

# Instalação das dependências
COPY package*.json ./
RUN npm install

# Copia dos arquivos do projeto
COPY . .

EXPOSE 3333

# Execução
CMD ["npm", "install"]
