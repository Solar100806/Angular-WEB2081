import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'contact',
        component: Contact,
    }
];
