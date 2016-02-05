import {ExampleFeatureService} from './ExampleFeature.service';

export class ExampleFeatureController {
    static IID = 'exampleFeatureController';
    static $inject = [ExampleFeatureService.IID];
    
    constructor(exampleFeatureService: ExampleFeatureService) {
        exampleFeatureService.doSomething();
    }
}