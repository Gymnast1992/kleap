const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.kleap.co/',
    viewportHeight: 667,
    viewportWidth: 375
  }
});
