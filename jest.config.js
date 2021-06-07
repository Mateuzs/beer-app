const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { defaults: tsjPreset } = require("ts-jest/presets");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  transform: {
    ...tsjPreset.transform,
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  moduleDirectories: ["<rootDir>/node_modules/", "<rootDir>/"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["<rootDir>/test-setup.ts"],
  coverageReporters: ["html", "text"],
  preset: "ts-jest/presets/default",
  testMatch: ["**/__tests__/*.(ts|tsx)"],
  testEnvironment: "jsdom",
};
