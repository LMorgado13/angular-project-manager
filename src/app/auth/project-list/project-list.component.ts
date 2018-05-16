import { Component, OnInit } from '@angular/core';
import { ProjectListService } from './services/project-list.service';
import { Project } from '../project-list/models/project.models'
import { Http, RequestOptions, Headers} from '@angular/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
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
