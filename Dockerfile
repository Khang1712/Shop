FROM node:latest

WORKDIR /src

COPY package*json ./

RUN yarn install

COPY . .

EXPOSE 9000

CMD yarn run dev