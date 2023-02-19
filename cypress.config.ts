import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: "https://ua.sinoptik.ua",
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    watchForFileChanges: false,
    specPattern: "**/*.cy.ts",
    videoCompression: false,
    videoUploadOnPasses: false,
    video: false,
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    blockHosts: [
      "*ghb.adtelligent.com",
      "*hubspot.com",
      "*hs-banner.com",
      "*usemessages.com",
      "*newrelic.com",
      "*nr-data.net",
      "*datadoghq.com",
    ],
  },
});

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  return config;
}