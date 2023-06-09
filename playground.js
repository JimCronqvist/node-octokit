const _ = require('lodash');
const { Octokit } = require('@octokit/core');
const { paginateRest } = require('@octokit/plugin-paginate-rest');
const { restEndpointMethods } = require('@octokit/plugin-rest-endpoint-methods');
const { throttling } = require("@octokit/plugin-throttling");

const MyOctokit = Octokit.plugin(paginateRest, restEndpointMethods); // , throttling
const octokit = new MyOctokit({ auth: process.env.GITHUB_TOKEN });

void async function main() {

  let repos = await octokit.paginate('GET /search/repositories', {
    q: 'archived:false+org:octokit',
    //sort: 'updated',
    per_page: 100,
  });
  repos = repos.map(repo => _.pick(repo, ['name', 'full_name', 'language', 'topics', 'visibility']));
  console.log(repos);

}();
