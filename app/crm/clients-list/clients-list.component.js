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
var CLIENTS = [
    { id: 1, clientName: 'Client 1' },
    { id: 2, clientName: 'Client 2' },
    { id: 3, clientName: 'Client 3' },
    { id: 4, clientName: 'Client 4' },
    { id: 5, clientName: 'Client 5' },
    { id: 6, clientName: 'Client 6' },
    { id: 7, clientName: 'Client 7' },
    { id: 8, clientName: 'Client 8' }
];
var ClientsList = (function () {
    function ClientsList() {
        this.clients = CLIENTS;
    }
    ClientsList = __decorate([
        core_1.Component({
            selector: 'clients-list',
            template: "\n        <div>\n            <h2>Clients</h2>\n            <client-item *ngFor=\"let client for clients\"></client-item>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ClientsList);
    return ClientsList;
}());
exports.ClientsList = ClientsList;
//# sourceMappingURL=clients-list.component.js.map