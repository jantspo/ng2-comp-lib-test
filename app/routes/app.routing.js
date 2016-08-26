"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('../heroes/heroes.component');
var dashboard_component_1 = require("../dashboard/dashboard.component");
var hero_detail_component_1 = require("../heroes/hero-detail.component");
var people_component_1 = require('../notable-people/people.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'notable-people',
        component: people_component_1.PeopleComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map