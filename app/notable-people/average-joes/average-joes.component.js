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
//import base / parent class that component class will extend
var people_list_component_1 = require('../people-list/people-list.component');
//component's cannot be inherited from parent class and must be defined
var AverageJoesComponent = (function (_super) {
    __extends(AverageJoesComponent, _super);
    function AverageJoesComponent() {
        _super.call(this);
    }
    AverageJoesComponent.prototype.onClick = function (person) {
        this.describeJob(person);
    };
    AverageJoesComponent.prototype.describeJob = function (person) {
        if (person.job) {
            alert(person.job);
        }
        else {
            alert('Unemployed');
        }
    };
    AverageJoesComponent = __decorate([
        core_1.Component({
            selector: 'average-joes',
            templateUrl: 'app/notable-people/average-joes/average-joes.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AverageJoesComponent);
    return AverageJoesComponent;
}(people_list_component_1.PeopleListComponent));
exports.AverageJoesComponent = AverageJoesComponent;
//# sourceMappingURL=average-joes.component.js.map