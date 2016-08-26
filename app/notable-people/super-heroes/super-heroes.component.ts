import { Component } from '@angular/core';

//import base / parent class that component class will extend
import { PeopleListComponent } from '../people-list/people-list.component';
import { SuperHero } from './super-hero';

//component's cannot be inherited from parent class and must be defined
@Component({
    selector: 'super-heroes',
    templateUrl: 'app/notable-people/super-heroes/super-heroes.component.html'
})
export class SuperHeroesComponent extends PeopleListComponent{
    constructor(){ super();}

    public onClick(superHero: SuperHero){
        this.describePowers(superHero.powers);
    }

    private describePowers(heroPowers: String[]){
        if(heroPowers.length){
            alert(heroPowers.map(power => power));
        }else{
            alert('Unknown');
        }
    }
}