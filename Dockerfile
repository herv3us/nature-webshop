FROM node:latest

WORKDIR /app/frontend

COPY ./frontend/build ./build

WORKDIR /app/server

COPY ./server/package*.json ./

RUN npm install

COPY ./server ./

CMD ["node", "./index.js"]