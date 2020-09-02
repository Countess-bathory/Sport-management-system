import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-match', component: AddMatchComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'displayMatch/:id', component: DisplayMatchComponent},
  {path: 'displayUser/:id', component: DisplayUserComponent},
  {path: 'editUser/:id', component: EditUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
