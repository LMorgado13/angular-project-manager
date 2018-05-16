import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { ProjectListComponent } from 'app/auth/project-list/project-list.component';
import { PublicGuard } from './common/guards/public.guard';
import { AuthGuard } from './common/guards/auth.guard';
import { NotFoundComponent } from './common/not-found/not-found/not-found.component'
import { IssuesListComponent } from './auth/issues-list/issues-list.component';


export const routes: Routes = [
    {
        path: '', pathMatch : 'full', redirectTo : '/login'

    },
    {
        path: 'login', component: LoginComponent, pathMatch: 'full', canActivate :[PublicGuard]
    },
    {
        path: 'home', component: HomeComponent,data:{ name: 'Home' }, canActivate: [AuthGuard]
    },
    {
        path: 'proyectos', component: ProjectListComponent ,data:{ name: 'Proyectos' }, canActivate: [AuthGuard]
    },
    {
        path: 'issues', component: IssuesListComponent , data:{ name: 'Issues' }, canActivate: [AuthGuard]
    },
    {
        path: '**', component: NotFoundComponent
    }


]