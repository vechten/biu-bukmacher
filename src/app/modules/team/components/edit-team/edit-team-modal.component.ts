import {Component, Inject, OnInit} from "@angular/core"
import {FormBuilder, FormGroup} from "@angular/forms"
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"
import {TeamService} from "src/app/services/team.service"

interface DialogData {
  id: string
}

@Component({
  selector: "app-edit-team-modal",
  templateUrl: "./edit-team-modal.component.html",
  styleUrls: ["./edit-team-modal.component.scss"],
})
export class EditTeamModalComponent implements OnInit {
  teamForm: FormGroup

  constructor(
    private readonly dialogRef: MatDialogRef<EditTeamModalComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData,
    private readonly teamService: TeamService,
    formBuilder: FormBuilder
  ) {
    this.teamForm = formBuilder.group({name: ""})
  }

  ngOnInit(): void {
    if (this.data.id) {
      this.teamService.getSingleTeam(this.data.id).subscribe((team) => {
        this.teamForm.setValue({name: team?.name || ""})
      })
    }
  }

  onClose(): void {
    this.dialogRef.close()
  }

  onSave(): void {
    if (this.data.id) {
      this.teamService.updateSingleTeam(this.data.id, {
        name: this.teamForm.get("name")?.value || "unknown",
      })
      this.dialogRef.close(this.data.id)
    }
  }
}
