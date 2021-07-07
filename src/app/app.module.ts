import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"

import {AppRoutingModule} from "./app-routing.module"
import {RootComponent} from "./common/root/root.component"
import {MaterialModule} from "./material.module"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {BetsService} from "./services/bets.service"
import {DrawerComponent} from "./common/drawer/drawer.component"
import {TeamModule} from "./modules/team/team.module"
import {ConfirmModalComponent} from "./common/confirm-modal/confirm-modal.component"

@NgModule({
  declarations: [RootComponent, DrawerComponent, ConfirmModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    TeamModule,
  ],
  providers: [BetsService],
  bootstrap: [RootComponent],
})
export class AppModule {
}
