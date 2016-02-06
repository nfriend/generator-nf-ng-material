import {ToolbarService} from './Toolbar.service';

export class ToolbarController {
    static IID = 'ToolbarController';
    static $inject = [ToolbarService.IID];
    
    constructor(ToolbarService: ToolbarService) {
        ToolbarService.doSomething();
    }
    
    name = 'hello';
}