import {DirectiveRestriction} from '../../DirectiveRestriction';
import {ToolbarController} from './Toolbar.controller';

export class ToolbarDirective {
    static IID = 'toolbar';
    
    templateUrl = './scripts/compiled/modules/Toolbar/Toolbar.tmpl.html';
    restrict = DirectiveRestriction.Attribute + DirectiveRestriction.Element;
    controller = ToolbarController;
    controllerAs = 'vm';
}