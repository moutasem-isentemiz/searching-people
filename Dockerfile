FROM node:18.17-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci 

COPY . .

# RUN FOR DEV MODE
CMD [ "npm", "run", "dev" ]