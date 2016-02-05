import {ExampleFeatureService} from './ExampleFeature.service';

describe('example-feature.service', () => {
    it('make sure the example service does something', () => {
        inject('$log', ($logger: ng.ILogService) => {
            let efs = new ExampleFeatureService($logger);
            spyOn($logger, 'info');
            efs.doSomething();
            expect($logger.info).toHaveBeenCalledWith('the example service did something.');
        });
    });
});