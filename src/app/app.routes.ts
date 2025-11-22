import { Routes } from '@angular/router';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Portfolio },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '' }
];
