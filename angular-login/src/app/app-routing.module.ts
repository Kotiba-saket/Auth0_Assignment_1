import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './pages/callback/callback.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
 
  {path:'', component:HomeComponent},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
