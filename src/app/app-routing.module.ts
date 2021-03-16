import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WheatherPageComponent } from './components/wheather-page/wheather-page.component';
import { AuthGuardGuard } from './guards/auth/auth-guard.guard'

const routes: Routes = [
 // { path: 'login', component: LoginComponent },
 // { path: 'signUp', component: SignUpComponent },
  { path: 'wheatherPage', component: WheatherPageComponent, canActivate: [AuthGuardGuard] },
  { path: "**", redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
