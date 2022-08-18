const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://cybr20200827202321.azurewebsites.net/",
    "modifyObstructiveCode": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
