import {exampleFeatureModule} from './modules/ExampleFeature/ExampleFeature.module';

let myAppModule: ng.IModule = angular.module('MyApp',
    [
        'ngMaterial',
        exampleFeatureModule.name
    ]);

export {myAppModule};