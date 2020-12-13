import AsyncComponent from "../utils/asyncComponent";
const path = require("path");
const files = require.context("./pages", true, /\.jsx$/);
const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".jsx");
  modules[name] = files(key).default || files(key);
});
