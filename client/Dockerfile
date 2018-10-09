# production stage
FROM docker.io/nginx:latest

COPY ./dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
