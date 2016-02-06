import 'angular-material';
import 'angular-mocks';
import {ToolbarService} from './Toolbar.service';
import {toolbarModule} from './Toolbar.module';

describe('toolbar.service', () => {
    
    beforeEach(() => {
        angular.mock.module(toolbarModule.name);
    })
    
    it('make sure the toolbar service does something', () => {
        inject('$log', ($logger: ng.ILogService) => {
            let efs = new ToolbarService($logger);
            spyOn($logger, 'info');
            efs.doSomething();
            expect($logger.info).toHaveBeenCalledWith('the toolbar service did something.');
        });
    });
}); 