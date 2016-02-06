System.config({
  baseURL: "./scripts/compiled",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "src/scripts/jspm_packages/github/*"
  },

  map: {
    "angular-material": "github:angular/bower-material@1.0.4",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.0",
    "github:angular/bower-angular-animate@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-angular-aria@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-angular-mocks@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-material@1.0.4": {
      "angular": "github:angular/bower-angular@1.4.9",
      "angular-animate": "github:angular/bower-angular-animate@1.4.9",
      "angular-aria": "github:angular/bower-angular-aria@1.4.9",
      "css": "github:systemjs/plugin-css@0.1.20"
    }
  }
});
