import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddplayerComponent } from './features/Player/pages/addplayer/addplayer.component';
import { IndexplayerlistComponent } from './features/Player/pages/indexplayerlist/indexplayerlist.component';
import { ReadplayerComponent } from './features/Player/pages/readplayer/readplayer.component';
import { UpdateplayerComponent } from './features/Player/pages/updateplayer/updateplayer.component';
import { AddtournamentComponent } from './features/Tournament/pages/addtournament/addtournament.component';
import { IndextournamentlistComponent } from './features/Tournament/pages/indextournamentlist/indextournamentlist.component';
import { ReadtournamentComponent } from './features/Tournament/pages/readtournament/readtournament.component';
import { UpdatetournamentComponent } from './features/Tournament/pages/updatetournament/updatetournament.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'indexplayer', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  {path: 'player', children:[
    {path: 'indexplayer', component: IndexplayerlistComponent},
    {path: 'addplayer', component: AddplayerComponent},
    {path:'updateplayer/:id', component: UpdateplayerComponent},
    {path:'readplayer/:id', component: ReadplayerComponent},
  ]},
  {path: 'tournament', children:[
    {path: 'indextournament', component: IndextournamentlistComponent},
    {path: 'addtournament', component: AddtournamentComponent},
    {path:'updatetournament/:id', component: UpdatetournamentComponent},
    {path:'readtournament/:id', component: ReadtournamentComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
