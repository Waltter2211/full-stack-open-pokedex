const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    e2e: {
      baseUrl: 'http://localhost:5000/'
    }
  },
})
