import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Mars } from './components/mars/mars';
import { Stages } from './components/stages/stages';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';
import { Shop } from './components/shop/shop';
import { AuthLogin } from './components/auth-login/auth-login';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'mars', component: Mars },
  { path: 'stages', component: Stages },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'shop', component: Shop },
  { path: 'auth', component: AuthLogin },
  { path: '**', component: PageNotFound }
];
