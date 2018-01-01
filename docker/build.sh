#!/bin/bash
# runs webpack in react container

NODE_ENV=${1:-production}
echo "Running with NODE_ENV=$NODE_ENV"

# stop and remove the containers if they are running
stop_and_remove_container()
{
    docker stop react-draggable-sort
    docker rm react-draggable-sort
}
stop_and_remove_container || true

# run the react-draggable-sort container
docker run \
    -v $(pwd)/src:/react/src \
    -v $(pwd)/dist:/react/dist \
    -v $(pwd)/docker:/react/docker \
    -v $(pwd)/webpack:/react/webpack \
    --name=react-draggable-sort \
    -e NODE_ENV=$NODE_ENV \
    --publish 2100:2100 \
    --entrypoint=/react/docker/entrypoints/build.sh \
    -t react-draggable-sort