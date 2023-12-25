FROM node:18.17-alpine

WORKDIR /usr/src/app

# COPY package*.json ./

COPY . .

RUN npm ci 

EXPOSE 3001