#!/bin/sh
echo Building vuejs:build

# build a image for package vue source
docker build -t vuejs:build -f ./client/Dockerfile.build ./client/

# run up a container and copy the build result to ./dist, then delete this container
docker container create --name extract vuejs:build 
docker container cp extract:/app/dist ./client/dist
docker container rm -f extract

echo Building fm_prs:latest
# start build a image for vue with nginx
docker build --no-cache -t fm_prs:latest -f ./client/Dockerfile ./client/

# delete the build result after all done.
rm -rf ./client/dist
