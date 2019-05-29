module.exports = {
  preset: "jest-expo",
  testMatch: ["**/?(*.)+(spec|test).js"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageDirectory: "coverage",
  verbose: true
};
