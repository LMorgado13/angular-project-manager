import { Component, OnInit } from '@angular/core';
import { ProjectListService } from '../project-list/services/project-list.service';
import { Project } from '../project-list/models/project.models';
import { Http, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  isLoading = true;
 project:Array<Project>;
  constructor(private _projectListServices: ProjectListService,
  private _http: Http) { }
  
  ngOnInit() {
    this.getAllproject();
  }

  getAllproject(){
    this._projectListServices.getAll().subscribe(
      (data: Project[]) =>{
        //next
        this.project = data;
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

  onDeleteProject(project: Project){
    this._projectListServices.deleteProject(project).subscribe((data) =>{
    console.log(data);
    this.getAllproject();
  });
  }

    setData(sortedProjects){
      this.project = sortedProjects;
    }

}
