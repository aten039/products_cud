FROM node:24-alpine

WORKDIR /home/app

COPY package.json package-lock.json /home/app/

RUN npm install

EXPOSE 3003

CMD [ "npm", "run", "dev" ]