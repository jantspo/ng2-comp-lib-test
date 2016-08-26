import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { Hero } from '../heroes/hero';
import { HeroesComponent } from '../heroes/heroes.component'
//import { HeroDetailComponent } from '../heroes/hero-detail.component';
import { HeroService } from '../heroes/hero.service';

@Component({
    selector: 'super-heroes',
    templateUrl: 'app/super-heroes/super-heroes.component.html',
    styleUrls: ['app/heroes/heroes.component.css']
})
export class SuperHeroesComponent extends HeroesComponent{
    constructor(heroService: HeroService, router:Router){
        super(heroService, router);
    }

    ngOnInit(): void {
        this.getHeroes('app/superHeroes');
    }

}
