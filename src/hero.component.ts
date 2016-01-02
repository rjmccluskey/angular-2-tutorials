import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class HeroComponent implements OnInit {
    public title = 'Tour of Heroes';
    public selectedHero: Hero;
    public heroes: Hero[];
    
    ngOnInit() {
        this.getHeroes();
    }
    
    constructor(private _heroService: HeroService) {}
    
    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    }
    
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
