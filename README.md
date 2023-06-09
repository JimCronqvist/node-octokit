# Docker image 'node-octokit'

Maintains a docker image based on node-alpine:lts, with the following npm/yarn packages installed:
- lodash
- @octokit/core
- @octokit/plugin-throttling
- @octokit/plugin-paginate-rest
- @octokit/plugin-rest-endpoint-methods

Daily builds by using a GitHub Action cron schedule for automatic builds.
