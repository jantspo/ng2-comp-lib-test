"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person_1 = require('../people-list/person');
var SuperHero = (function (_super) {
    __extends(SuperHero, _super);
    function SuperHero() {
        _super.apply(this, arguments);
    }
    return SuperHero;
}(person_1.Person));
exports.SuperHero = SuperHero;
//# sourceMappingURL=super-hero.js.map