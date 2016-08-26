import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { ResponseData } from '../classes/response-data';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpRequestsService{
    constructor(private http: Http){

    }

    get(targetUrl: string): Promise<any>{
        return this.http.get(targetUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


    save(targetUrl: string, data: ResponseData): Promise<Object>  {
        if (data.id || data._id) {
            return this.put(targetUrl, data);
        }
        return this.post(targetUrl, data);
    }
    private post(targetUrl: string, data: ResponseData): Promise<Object>{
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(targetUrl, JSON.stringify(data), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Hero
    private put(targetUrl: string, data: ResponseData): Promise<Object> {
        let headers = new Headers();
        let id = data.id ? data.id : data._id;
        headers.append('Content-Type', 'application/json');
        let url = `${ targetUrl }/${ id }`;
        return this.http
            .put(url, JSON.stringify(data), {headers: headers})
            .toPromise()
            .then(() => data)
            .catch(this.handleError);
    }

    delete(targetUrl: string, data: ResponseData): Promise<Response> {
        let headers = new Headers();
        let id = data.id ? data.id : data._id;
        headers.append('Content-Type', 'application/json');

        let url = `${ targetUrl }/${ id }`;

        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }

    //getById(targetUrl: string, id: number): Promise<data>{
    //    return this.getHeroes('app/heroes')
    //        .then(heroes => heroes.find(hero => hero.id === id));
    //}
}