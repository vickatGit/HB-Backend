FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY src/ src/
COPY package.json package.json

RUN npm cache clean --force
RUN npm install --max-sockets=1
ENTRYPOINT ["npm","start"]

