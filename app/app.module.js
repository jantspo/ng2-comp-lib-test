"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
var http_2 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var app_routing_1 = require('./routes/app.routing');
//Components
var app_component_1 = require('./app.component');
var heroes_component_1 = require('./heroes/heroes.component');
var dashboard_component_1 = require("./dashboard/dashboard.component");
var hero_detail_component_1 = require("./heroes/hero-detail.component");
var hero_search_component_1 = require('./heroes/hero-search.component');
var super_heroes_component_1 = require('./notable-people/super-heroes/super-heroes.component');
var people_component_1 = require('./notable-people/people.component');
//Service
var hero_service_1 = require('./heroes/hero.service');
var people_service_1 = require("./notable-people/people.service");
var http_requests_service_1 = require("./services/http-requests.service");
var average_joes_component_1 = require("./notable-people/average-joes/average-joes.component");
var people_list_component_1 = require("./notable-people/people-list/people-list.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                heroes_component_1.HeroesComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                hero_search_component_1.HeroSearchComponent,
                super_heroes_component_1.SuperHeroesComponent,
                people_component_1.PeopleComponent,
                average_joes_component_1.AverageJoesComponent,
                super_heroes_component_1.SuperHeroesComponent,
                people_list_component_1.PeopleListComponent
            ],
            providers: [
                hero_service_1.HeroService,
                people_service_1.PeopleService,
                http_requests_service_1.HttpRequestsService,
                { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
                { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService } // in-mem server data
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map