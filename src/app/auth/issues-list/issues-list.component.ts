import { Component, OnInit } from '@angular/core';
import { IssuesListServices } from '../issues-list/services/issues-list.service';
import { Issue } from '../issues-list/models/issue.models'
import { Http, RequestOptions, Headers} from '@angular/http';



@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  isLoading = true;
 issues:Array<Issue>;
  constructor(private _issuesListServices: IssuesListServices,
  private _http: Http) { }
  
  ngOnInit() {
    this.getAllissues();
  }

  getAllissues(){
    this._issuesListServices.getAll().subscribe(
      (data: Issue[]) =>{
        //next
        this.issues = data;
        this.isLoading = false;
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('Finished!');
      }

    );
  }

  onDeleteIssues(issues: Issue){
    this._issuesListServices.deleteIssue(issues).subscribe((data) =>{
    console.log(data);
    this.getAllissues();
  });
  }

    setData(sortedIssues){
      this.issues = sortedIssues;
    }

}

