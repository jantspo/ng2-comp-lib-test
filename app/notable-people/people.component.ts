import { Component, OnInit } from '@angular/core';

//Services
import { PeopleService } from './people.service';
import { AverageJoe } from './average-joes/average-joe';
import { SuperHero } from './super-heroes/super-hero';
import { SuperVillian } from './super-villians/super-villian';
import { Person } from './people-list/person';

@Component({
    selector: 'notable-people',
    template: `
        <h3>Notable People</h3>
        <div class="flex-parent">
            <people-list class="flex-child" [people]="people"></people-list>
            <average-joes class="flex-child" [people]="averageJoes"></average-joes>
            <super-heroes class="flex-child" [people]="superHeroes" (doThing)="doThing()"></super-heroes>
        </div>
    `,
    styles: [`
        .flex-parent{
            display: flex;
            flex-direction: row;
        }
        .flex-child{
            flex-grow: 1;
        }
    `]
})
export class PeopleComponent implements OnInit{
    averageJoes: AverageJoe[];
    superHeroes: SuperHero[];
    superVillians: SuperVillian[];
    people: Person[];

    constructor(private peopleService: PeopleService){}

    ngOnInit(){
        this.getPeople();
        this.getAverageJoes();
        this.getSuperHeroes();
        this.getSuperVillians();
    }

    private getPeople(): void{
        this.peopleService.getPeople('app/heroes').then((people) => this.people = people);
    }

    private getAverageJoes(): void{
        this.peopleService.getPeople('app/averageJoes').then((people) => this.averageJoes = people);
    }

    private getSuperHeroes(): void{
        this.peopleService.getPeople('app/superHeroes').then((people) => this.superHeroes = people);
    }

    private getSuperVillians(): void{
        this.peopleService.getPeople('app/superVillians').then((people) => this.superVillians = people);
    }
}