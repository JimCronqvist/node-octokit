FROM node:lts-alpine

RUN yarn global add @octokit/core @octokit/plugin-paginate-rest lodash
