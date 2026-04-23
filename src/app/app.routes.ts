import { Routes } from '@angular/router';
import { App } from './app';
import { Auth } from './feature/auth/auth';
import { TestComponent } from './feature/test-component/test-component';
import { About } from './feature/about/about';
import { Demo } from './feature/demo/demo';
import { Home } from './feature/home/home';

export const routes: Routes = [
    {path : '' , redirectTo: "about", pathMatch: 'full' },
    {
        path : "about", component : About
    },
    {
        path: 'login', component:Auth
    },
    {
        path:'using-test', component: TestComponent
    },
    {
        path: 'demo', component:Demo
    },
    {
        path: 'home', component: Home
    }
];
