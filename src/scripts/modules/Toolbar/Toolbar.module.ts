import {ToolbarController} from './Toolbar.controller';
import {ToolbarService} from './Toolbar.service';
import {ToolbarDirective} from './Toolbar.directive';

let toolbarModule = angular.module('ToolbarModule', []);

toolbarModule.controller(ToolbarController.IID, ToolbarController);
toolbarModule.service(ToolbarService.IID, ToolbarService);
toolbarModule.directive(ToolbarDirective.IID, () => { return new ToolbarDirective; });

export {toolbarModule};