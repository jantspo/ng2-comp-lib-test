import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    styleUrls: ['app/heroes/heroes.component.css']
})
export class HeroesComponent implements OnInit{
    heroes: Hero[];
    error: any;
    selectedHero: Hero;
    addingHero = false;
    constructor(
        private heroService: HeroService,
        private router: Router){}

    getHeroes(targetUrl: string): void{
        this.heroService.getHeroes(targetUrl).then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes('app/heroes');
    }

    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }

    gotoDetail(): void{
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    addHero(): void{
        this.addingHero = true;
        this.selectedHero = null;
    }
    close(savedHero: Hero): void{
        this.addingHero = false;
        if (savedHero) {this.getHeroes('app/heroes');}
    }
    deleteHero(hero: Hero, event: any): void {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }
}