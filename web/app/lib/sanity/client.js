const sanityClient = require("@sanity/client");

module.exports = sanityClient({
    projectId: "ufdizlou",
    dataset: "production",
    useCdn: "true",
    apiVersion: "2021-10-21",
});