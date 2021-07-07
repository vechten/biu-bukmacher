import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {TeamsListComponent} from "./components/teams-list/teams-list.component"
import {TeamCardComponent} from "./components/team-card/team-card.component"
import {MaterialModule} from "src/app/material.module"
import {SingleTeamComponent} from "./components/single-team/single-team.component"
import {RouterModule} from "@angular/router"
import {SingleTeamBetsComponent} from "./components/single-team-bets/single-team-bets.component"
import {ChangeLogoModalComponent} from "./components/change-logo/change-logo-modal.component"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditTeamModalComponent} from './components/edit-team/edit-team-modal.component';
import {LogoComponent} from './components/logo/logo.component';
import {AddTeamComponent} from './components/add-team/add-team.component'
import { HomeComponent } from "./components/home/home.component"
import { MatchCardComponent } from "./components/match-card/match-card.component"
import { AddBetComponent } from "./components/add-bet/add-bet.component"


@NgModule({
  declarations: [
    TeamsListComponent,
    TeamCardComponent,
    SingleTeamComponent,
    SingleTeamBetsComponent,
    ChangeLogoModalComponent,
    EditTeamModalComponent,
    LogoComponent,
    AddTeamComponent,
    HomeComponent,
    MatchCardComponent,
    AddBetComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, ReactiveFormsModule,CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [LogoComponent]
})
export class TeamModule {
}
