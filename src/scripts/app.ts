import {toolbarModule} from './modules/Toolbar/Toolbar.module';

let myAppModule: ng.IModule = angular.module('MyApp',
    [
        'ngMaterial',
        toolbarModule.name
    ]);

export {myAppModule};