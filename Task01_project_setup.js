const { getProjectDetails } = require("./handson/project.js");
const { log } = require("./logger.js");

// TODO 1: Complete the functions in
// ./handson/client.js

// TODO : GET project details

getProjectDetails().then(log).catch(log);
// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html#get-project

// TODO : GET ShippingMethod by ID

// TODO : GET Tax Category by key
