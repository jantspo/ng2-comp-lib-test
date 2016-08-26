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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var HttpRequestsService = (function () {
    function HttpRequestsService(http) {
        this.http = http;
    }
    HttpRequestsService.prototype.get = function (targetUrl) {
        return this.http.get(targetUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HttpRequestsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    HttpRequestsService.prototype.save = function (targetUrl, data) {
        if (data.id || data._id) {
            return this.put(targetUrl, data);
        }
        return this.post(targetUrl, data);
    };
    HttpRequestsService.prototype.post = function (targetUrl, data) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(targetUrl, JSON.stringify(data), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Hero
    HttpRequestsService.prototype.put = function (targetUrl, data) {
        var headers = new http_1.Headers();
        var id = data.id ? data.id : data._id;
        headers.append('Content-Type', 'application/json');
        var url = targetUrl + "/" + id;
        return this.http
            .put(url, JSON.stringify(data), { headers: headers })
            .toPromise()
            .then(function () { return data; })
            .catch(this.handleError);
    };
    HttpRequestsService.prototype.delete = function (targetUrl, data) {
        var headers = new http_1.Headers();
        var id = data.id ? data.id : data._id;
        headers.append('Content-Type', 'application/json');
        var url = targetUrl + "/" + id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    HttpRequestsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpRequestsService);
    return HttpRequestsService;
}());
exports.HttpRequestsService = HttpRequestsService;
//# sourceMappingURL=http-requests.service.js.map