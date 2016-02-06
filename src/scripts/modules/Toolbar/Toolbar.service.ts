export class ToolbarService {
    static IID = "toolbarService";
    static $inject = ['$log']
    
    constructor(private $logger: ng.ILogService) {
        
    }
    
    doSomething = () => {
        this.$logger.log('the toolbar service did something.');
    };
}