System.config({
  baseURL: "./scripts/compiled",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "./scripts/jspm_packages/github/*"
  },

  map: {
    "angular-material": "github:angular/bower-material@1.0.4",
    "github:angular/bower-angular-animate@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-angular-aria@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-material@1.0.4": {
      "angular": "github:angular/bower-angular@1.4.9",
      "angular-animate": "github:angular/bower-angular-animate@1.4.9",
      "angular-aria": "github:angular/bower-angular-aria@1.4.9",
      "css": "github:systemjs/plugin-css@0.1.20"
    }
  }
});
