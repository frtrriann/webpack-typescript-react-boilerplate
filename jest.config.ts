import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: [".ts", '.tsx'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  "setupFilesAfterEnv": [
    "./src/jest-setup.ts"
  ],
  testMatch: [
    "**/__tests__/**/*.+(js|jsx|ts|tsx)",
    "**/?(*.)+(spec|test).+(js|jsx|ts|tsx)",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};

export default config;
