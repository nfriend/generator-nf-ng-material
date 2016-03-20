import 'angular-mocks';
import {ToolbarService} from './Toolbar.service';

describe('toolbar.service', () => {
    it('make sure the toolbar service does something', inject(($injector: any) => {
        var $log: ng.ILogService = $injector.get('$log');
            let efs = new ToolbarService($log);
            spyOn($log, 'info').and.callThrough();
            efs.doSomething();
            expect($log.info).toHaveBeenCalledWith('the toolbar service did something.');
    }));
}); 