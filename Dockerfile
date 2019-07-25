FROM node:10.16.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --prod

COPY . .

ENTRYPOINT [ "node", "index.js" ]
CMD [ "-h", "" ]