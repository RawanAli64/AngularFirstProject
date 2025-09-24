import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Error404Component } from './features/users/shared/error404/error404.component';


export const routes: Routes = [
{path: "user" , loadChildren: ()=> import("./features/users/user.module").then((m) => m.UserModule)},
{path: "" , pathMatch: "full" ,redirectTo: "user"},
{path: "**" , component: Error404Component}
];

// {path: "about" , loadComponent: ()=> import("./features/users/components/about/about.component").then((m)=>m.AboutComponent), },
