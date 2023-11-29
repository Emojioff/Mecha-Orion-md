FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*
  
RUN git clone h'https://github.com/Emojioff/Mecha-Orion-md  /root/Mecha Orion_BOt
WORKDIR /root/Mecha orion_Bot/


COPY package.json .
run npm install -g npm@10.2.4
RUN npm install pm2 -g
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5000

CMD ["node", "index.js"
