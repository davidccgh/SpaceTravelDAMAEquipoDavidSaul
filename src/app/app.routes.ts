import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Mars } from './components/mars/mars';
import { Stages } from './components/stages/stages';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'mars', component: Mars },
  { path: 'stages', component: Stages },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
