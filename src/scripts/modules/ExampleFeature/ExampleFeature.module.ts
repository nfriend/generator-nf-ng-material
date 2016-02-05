import {ExampleFeatureController} from './ExampleFeature.controller';
import {ExampleFeatureService} from './ExampleFeature.service';
import {ExampleFeatureDirective} from './ExampleFeature.directive';

let exampleFeatureModule = angular.module('exampleFeatureModule', []);

exampleFeatureModule.controller(ExampleFeatureController.IID, ExampleFeatureController);
exampleFeatureModule.service(ExampleFeatureService.IID, ExampleFeatureService);
exampleFeatureModule.directive(ExampleFeatureDirective.IID, () => { return new ExampleFeatureDirective; });

export {exampleFeatureModule};