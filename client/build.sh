#!/bin/sh
echo Building vuejs:build

# build a image for package vue source
docker build -t vuejs:build . -f Dockerfile.build

# run up a container and copy the build result to ./dist, then delete this container
docker container create --name extract vuejs:build 
docker container cp extract:/app/dist ./dist
docker container rm -f extract

echo Building nginx_vue:latest
# start build a image for vue with nginx
docker build --no-cache -t nginx_vue:latest .

# delete the build result after all done.
rm -rf ./dist
