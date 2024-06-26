FROM node:18-alpine

WORKDIR /app

ADD package*.json ./

RUN npm install

ADD . .

CMD ["npm", "start"]