import {Component, OnInit} from "@angular/core"
import {ActivatedRoute, Router} from "@angular/router"
import {Team} from "src/app/models/team.model"
import {TeamService} from "src/app/services/team.service"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"
import {ChangeLogoModalComponent} from "../change-logo/change-logo-modal.component"
import {ConfirmModalComponent} from "src/app/common/confirm-modal/confirm-modal.component"
import {EditTeamModalComponent} from "../edit-team/edit-team-modal.component"

@Component({
  selector: "app-single-team",
  templateUrl: "./single-team.component.html",
  styleUrls: ["./single-team.component.scss"],
})
export class SingleTeamComponent implements OnInit {
  team: Team | undefined

  constructor(
    private readonly _teamsService: TeamService,
    private readonly _route: ActivatedRoute,
    private readonly _dialog: MatDialog,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    this.getTeam()
  }

  changeLogo(): void {
    const ref = this._dialog.open(ChangeLogoModalComponent, {
      width: "400px",
      data: {id: this.team?.id},
      autoFocus: false,
    })

    ref.afterClosed().subscribe(() => {
      this.getTeam()
    })
  }

  removeLogo(): void {
    const ref = this._dialog.open(ConfirmModalComponent, {
      width: "300px",
      data: {title: "Usuń logo", subtitle: "Czy na pewno chcesz usunąć logo"},
      autoFocus: false,
    })
    ref.afterClosed().subscribe((response) => {
      if (response && this.team) {
        this._teamsService.updateSingleTeam(this.team.id, {logoUrl: ""})
        this.getTeam()
      }
    })
  }

  removeTeam(): void {
    const ref = this._dialog.open(ConfirmModalComponent, {
      width: "500px",
      data: {title: "Usuń drużyne", subtitle: "Czy na pewno chcesz usunąć drużynę"},
      autoFocus: false,
    })
    ref.afterClosed().subscribe((response) => {
      if (response && this.team) {
        this._teamsService.removeSingleTeam(this.team.id)
        this._router.navigateByUrl("/teams")
      }
    })
  }

  editTeam(): void {
    const ref = this._dialog.open(EditTeamModalComponent, {
      width: "500px",
      data: {id: this.team?.id},
      autoFocus: false,
    })
    ref.afterClosed().subscribe((response) => {
      this.getTeam()
    })
  }

  getTeam() {
    const teamId = this._route.snapshot.paramMap.get("id")
    if (!teamId) return
    this._teamsService.getSingleTeam(teamId).subscribe((response) => {
      this.team = response
    })
  }
}
