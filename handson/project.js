const { apiRoot, projectKey } = require("./client.js");

module.exports.getProjectDetails = () => {
  return apiRoot
    .withProjectKey({projectKey})
    .get()
    .execute()
}
