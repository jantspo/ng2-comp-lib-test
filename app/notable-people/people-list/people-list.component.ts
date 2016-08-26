import { Component, Input } from '@angular/core';

import { Person } from '../people-list/person';

@Component({
    selector: 'people-list',
    templateUrl: 'app/notable-people/people-list/people-list.component.html'
})
export class PeopleListComponent{
    @Input()
    people: Person[];
    constructor(){

    }

    onClick(person: Person){
        alert('Hello');
    }
}