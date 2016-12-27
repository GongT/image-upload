System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "fast-sha256": "npm:fast-sha256@1.0.0",
    "qs": "npm:qs@6.3.0"
  }
});
