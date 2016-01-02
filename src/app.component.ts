import {Component} from 'angular2/core';
import {HeroComponent} from './hero.component';
import 'rxjs/operator/map';

@Component({
    selector: 'app',
    moduleId: module.id,
    template: `
        <my-heroes></my-heroes>
    `,
    directives: [HeroComponent]
})
export class AppComponent {
    
}