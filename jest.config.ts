import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
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
