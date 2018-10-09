FROM docker.io/node:alpine

WORKDIR /home/app/

ADD . .

RUN npm config set registry https://registry.npm.taobao.org \
 && npm install

EXPOSE 3000

CMD npm run prod
