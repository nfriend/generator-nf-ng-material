import {DirectiveRestriction} from '../../DirectiveRestriction';
import {ExampleFeatureController} from './ExampleFeature.controller';

export class ExampleFeatureDirective {
    static IID = 'exampleFeature';
    
    templateUrl = './scripts/compiled/modules/ExampleFeature/ExampleFeature.tmpl.html';
    restrict = DirectiveRestriction.Attribute + DirectiveRestriction.Element;
    controller = ExampleFeatureController;
    controllerAs = 'vm'; 
}