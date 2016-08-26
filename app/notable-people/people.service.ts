import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { HttpRequestsService } from '../services/http-requests.service';

@Injectable()
export class PeopleService{
    constructor(private http:HttpRequestsService){ }

    getPeople(urlPath: string){
        return this.http.get(urlPath);
    }
}