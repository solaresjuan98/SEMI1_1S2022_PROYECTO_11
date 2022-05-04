FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

COPY . . 

CMD ["npm", "start"]