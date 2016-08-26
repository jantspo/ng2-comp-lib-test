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
//Services
var people_service_1 = require('./people.service');
var PeopleComponent = (function () {
    function PeopleComponent(peopleService) {
        this.peopleService = peopleService;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.getPeople();
        this.getAverageJoes();
        this.getSuperHeroes();
        this.getSuperVillians();
    };
    PeopleComponent.prototype.getPeople = function () {
        var _this = this;
        this.peopleService.getPeople('app/heroes').then(function (people) { return _this.people = people; });
    };
    PeopleComponent.prototype.getAverageJoes = function () {
        var _this = this;
        this.peopleService.getPeople('app/averageJoes').then(function (people) { return _this.averageJoes = people; });
    };
    PeopleComponent.prototype.getSuperHeroes = function () {
        var _this = this;
        this.peopleService.getPeople('app/superHeroes').then(function (people) { return _this.superHeroes = people; });
    };
    PeopleComponent.prototype.getSuperVillians = function () {
        var _this = this;
        this.peopleService.getPeople('app/superVillians').then(function (people) { return _this.superVillians = people; });
    };
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'notable-people',
            template: "\n        <h3>Notable People</h3>\n        <div class=\"flex-parent\">\n            <people-list class=\"flex-child\" [people]=\"people\"></people-list>\n            <average-joes class=\"flex-child\" [people]=\"averageJoes\"></average-joes>\n            <super-heroes class=\"flex-child\" [people]=\"superHeroes\" (doThing)=\"doThing()\"></super-heroes>\n        </div>\n    ",
            styles: ["\n        .flex-parent{\n            display: flex;\n            flex-direction: row;\n        }\n        .flex-child{\n            flex-grow: 1;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map