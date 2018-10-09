FROM docker.io/node:alpine

ADD . /home/app

WORKDIR client
RUN npm install && \
    npm run build

WORKDIR server
RUN npm install 

EXPOSE 3000

CMD npm run prod