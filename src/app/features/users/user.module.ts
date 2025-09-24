import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { WhyUsComponent } from "./components/why-us/why-us.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { TrainersComponent } from "./components/trainers/trainers.component";
import { LayOut } from "./layout/layout.component";



const routes: Routes = [
{path: "" , component: LayOut , children: [
{path: "home" , component: HomeComponent}, 
{path: "about" , component: AboutComponent},
{path: "why-us" , component: WhyUsComponent},
{path: "courses" , component: CoursesComponent},
{path: "trainers" , component: TrainersComponent},
{path: "" , pathMatch: "full" ,redirectTo: "home"},

]},    

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})





export class UserModule{

}