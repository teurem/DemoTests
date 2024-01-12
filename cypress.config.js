const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iej5p9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
