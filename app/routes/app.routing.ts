import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from '../heroes/heroes.component';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {HeroDetailComponent} from "../heroes/hero-detail.component";
import { PeopleComponent } from '../notable-people/people.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path:'notable-people',
        component: PeopleComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);