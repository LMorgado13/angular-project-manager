import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Issue  } from 'app/auth/issues-list/models/issue.models';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { HttpService } from '../../../common/services/http.service';

@Injectable()
export class  IssuesListServices extends HttpService{
    issues: Array< Issue > = [];
    constructor(public _http: Http, public _authService: AuthenticationService ) {
        super(_http);
    }

    getAll(): Observable<Array< Issue >> {

        const url = `${this.apiBaseURL}/issues`;
        const token = this._authService.user.api_token;
        return  this.get(url,token);

    }

    deleteIssue( issues : Issue  ) {

        const url = `${this.apiBaseURL}/issues`;
        const token = this._authService.user.api_token;
        return  this._http.delete(url,token);
    }

}