import { Component } from '@angular/core';

//import base / parent class that component class will extend
import { PeopleListComponent } from '../people-list/people-list.component';
import { AverageJoe } from './average-joe';

//component's cannot be inherited from parent class and must be defined
@Component({
    selector: 'average-joes',
    templateUrl: 'app/notable-people/average-joes/average-joes.component.html'
})
export class AverageJoesComponent extends PeopleListComponent{
    constructor(){ super();}
    public onClick(person: AverageJoe){
        this.describeJob(person)
    }

    private describeJob(person: AverageJoe){
        if(person.job){
            alert(person.job);
        }else{
            alert('Unemployed');
        }

    }
}