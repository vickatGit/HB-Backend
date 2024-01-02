FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /app

COPY package.json package.json

RUN npm cache clean --force
RUN npm install --max-sockets=1

COPY src/ src/
COPY app.js app.js
COPY .env .env

EXPOSE 8080
ENTRYPOINT ["npm","start"]

