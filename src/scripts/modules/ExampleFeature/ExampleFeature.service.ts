export class ExampleFeatureService {
    static IID = "exampleFeatureService";
    static $inject = ['$log']
    
    constructor(private $logger: ng.ILogService) {
        
    }
    
    doSomething = () => {
        this.$logger.log('the example service did something.');
    };
}