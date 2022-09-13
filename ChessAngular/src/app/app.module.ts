import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddplayerComponent } from './features/Player/pages/addplayer/addplayer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddtournamentComponent } from './features/Tournament/pages/addtournament/addtournament.component';
import { IndextournamentlistComponent } from './features/Tournament/pages/indextournamentlist/indextournamentlist.component';
import { IndexplayerlistComponent } from './features/Player/pages/indexplayerlist/indexplayerlist.component';
import { NavComponent } from './layout/nav/nav.component';
import { ButtonModule } from 'node_modules/primeng/button';
import { SelectButtonModule } from "primeng/selectbutton";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import { StatusPipe } from './shared/pipes/status.pipe';
import { GenderPipe } from './shared/pipes/gender.pipe';
import { UpdateplayerComponent } from './features/Player/pages/updateplayer/updateplayer.component';
import { LoginComponent } from './layout/login/login.component';
import { ReadplayerComponent } from './features/Player/pages/readplayer/readplayer.component';
import { ReadtournamentComponent } from './features/Tournament/pages/readtournament/readtournament.component';
import { UpdatetournamentComponent } from './features/Tournament/pages/updatetournament/updatetournament.component';
import { IsNullPipe } from './shared/pipes/isnull.pipe';
import { passwordBytesPipe } from './shared/pipes/passwordBytes.pipe';
import { RolePipe } from './shared/pipes/role.pipe';
import { CategoryPipe } from './shared/pipes/category.pipe';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexplayerlistComponent,
    AddplayerComponent,
    AddtournamentComponent,
    IndextournamentlistComponent,
    NavComponent,
    StatusPipe,
    GenderPipe,
    IsNullPipe,
    UpdateplayerComponent,
    LoginComponent,
    ReadplayerComponent,
    ReadtournamentComponent,
    UpdatetournamentComponent,
    passwordBytesPipe,
    RolePipe,
    CategoryPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    ToggleButtonModule,
    InputSwitchModule,
    MultiSelectModule,
    DialogModule
  ],
  exports:[ToggleButtonModule],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
