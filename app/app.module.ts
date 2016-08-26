import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { routing } from './routes/app.routing';

//Components
import {AppComponent} from './app.component';
import { HeroesComponent }  from './heroes/heroes.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./heroes/hero-detail.component";
import { HeroSearchComponent } from './heroes/hero-search.component'
import { SuperHeroesComponent } from './notable-people/super-heroes/super-heroes.component';
import { PeopleComponent } from './notable-people/people.component';
//Service
import { HeroService }  from './heroes/hero.service';
import {PeopleService} from "./notable-people/people.service";
import {HttpRequestsService} from "./services/http-requests.service";
import {AverageJoesComponent} from "./notable-people/average-joes/average-joes.component";
import {PeopleListComponent} from "./notable-people/people-list/people-list.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        SuperHeroesComponent,
        PeopleComponent,
        AverageJoesComponent,
        SuperHeroesComponent,
        PeopleListComponent
    ],
    providers:[
        HeroService,
        PeopleService,
        HttpRequestsService,
        { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }