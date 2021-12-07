/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = [
  "web.mjs",
  "mjs",
  "web.js",
  "js",
  "web.ts",
  "ts",
  "web.tsx",
  "tsx",
  "json",
  "web.jsx",
  "jsx",
];

const resolveModule = (
  resolveFn,
  filePath,
  extenstions = moduleFileExtensions
) => {
  const extension = extenstions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

module.exports = {
  // Source files
  src: resolveApp("src"),

  // Production build files
  build: resolveApp("build"),
  config: resolveApp("config"),
  // Static files that get copied to build folder
  public: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appIndexJs: resolveModule(resolveApp, "src/index", [
    "jsx",
    "tsx",
    "ts",
    "js",
  ]),
};
