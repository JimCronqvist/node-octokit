FROM node:lts-alpine

RUN apk add --no-cache jq

RUN yarn add \
    lodash \
    @octokit/core \
    @octokit/plugin-throttling \
    @octokit/plugin-paginate-rest \
    @octokit/plugin-rest-endpoint-methods \
    && yarn cache clean

WORKDIR /app
