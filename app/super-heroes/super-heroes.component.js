"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var router_1 = require('@angular/router');
//import { Hero } from '../heroes/hero';
var heroes_component_1 = require('../heroes/heroes.component');
//import { HeroDetailComponent } from '../heroes/hero-detail.component';
var hero_service_1 = require('../heroes/hero.service');
var SuperHeroesComponent = (function (_super) {
    __extends(SuperHeroesComponent, _super);
    function SuperHeroesComponent(heroService, router) {
        _super.call(this, heroService, router);
    }
    SuperHeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes('app/superHeroes');
    };
    SuperHeroesComponent = __decorate([
        core_1.Component({
            selector: 'super-heroes',
            templateUrl: 'app/super-heroes/super-heroes.component.html',
            styleUrls: ['app/heroes/heroes.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], SuperHeroesComponent);
    return SuperHeroesComponent;
}(heroes_component_1.HeroesComponent));
exports.SuperHeroesComponent = SuperHeroesComponent;
//# sourceMappingURL=super-heroes.component.js.map