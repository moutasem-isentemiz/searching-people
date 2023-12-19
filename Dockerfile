FROM node:18.17-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i 

COPY . .

EXPOSE 3001

# RUN FOR DEV MODE
CMD [ "npm", "run", "dev" ]