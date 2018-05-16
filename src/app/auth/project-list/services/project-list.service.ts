import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Project } from '../models/project.models';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { HttpService } from '../../../common/services/http.service';

@Injectable()
export class ProjectListService extends HttpService {
    project: Array<Project> = [];
    constructor(public _http: Http, public _authService: AuthenticationService ) {
        super(_http);   
    }

    getAll(): Observable<Array<Project>> {

        //const url = 'http://172.104.91.187/projects';
        const url = `${this.apiBaseURL}/projects`;
        const token = this._authService.user.api_token;
        //lo que esta comentado funciona sin toque 
        //const headers = new Headers(
        //    {
        //        'Content-Type': 'application/json',
        //        'Api-Token' : token,
        //    });

        // const options = new RequestOptions({
        //     headers: headers
        //});
        return  this.get(url,token);
    }

deleteProject( project: Project ) {

    //console.log('Click Delete!');
    //http://172.104.91.187/ //Url de Japon.
    //apiBaseURL viene de nuestro baken 
    const url =  `${this.apiBaseURL}/projects/${project.id}`;
    const token = this._authService.user.api_token;
    //const headers = new Headers({
    // 'Content-Type': 'application/json'
    //});
    //const options = new RequestOptions({headers: headers});
    //return  this._http.delete(url,options).map((response) => {
    //console.log(response);
    return this.delete(url,token);
    }
}
