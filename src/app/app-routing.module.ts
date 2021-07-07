import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {AddBetComponent} from "./modules/team/components/add-bet/add-bet.component"
import {HomeComponent} from "./modules/team/components/home/home.component"
import {SingleTeamComponent} from "./modules/team/components/single-team/single-team.component"
import {TeamsListComponent} from "./modules/team/components/teams-list/teams-list.component"

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "teams", component: TeamsListComponent},
  {path: "teams/:id", component: SingleTeamComponent},
  {path: "bets/add", component: AddBetComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
