import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Project } from '../models/issues.models';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { HttpService } from '../../../common/services/http.service';

@Injectable()
export class  IssuesListComponent extends HttpService{
    project: Array<Project> = [];
    constructor(public _http: Http, public _authService: AuthenticationService ) {
        super(_http);
    }

    getAll(): Observable<Array<Project>> {

        const url = `${this.apiBaseURL}/projects`;
        const token = this._authService.user.api_token;
        return  this.get(url,token);

    }

deleteProject( project: Project ) {

        const url = `${this.apiBaseURL}/projects`;
        const token = this._authService.user.api_token;
        return  this._http.delete(url,token);
    }

}