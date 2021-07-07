import {Component, Inject, OnInit} from "@angular/core"
import {FormBuilder, FormGroup} from "@angular/forms"

import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"
import {TeamService} from "src/app/services/team.service"

interface DialogData {
  id: string
}

@Component({
  selector: "app-change-logo-modal",
  templateUrl: "./change-logo-modal.component.html",
  styleUrls: ["./change-logo-modal.component.scss"],
})
export class ChangeLogoModalComponent implements OnInit {
  teamForm: FormGroup

  constructor(
    private readonly dialogRef: MatDialogRef<ChangeLogoModalComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: DialogData,
    private readonly teamService: TeamService,
    formBuilder: FormBuilder
  ) {
    this.teamForm = formBuilder.group({
      logoUrl: "",
    })
  }

  ngOnInit(): void {
    this.teamService.getSingleTeam(this.data.id).subscribe((team) => {
      this.teamForm.setValue({logoUrl: team?.logoUrl || ""})
    })
  }

  onSave() {
    this.teamService.updateSingleTeam(this.data.id, {
      logoUrl: this.teamForm.get("logoUrl")?.value,
    })
    this.dialogRef.close()
  }

  onClose() {
    this.dialogRef.close()
  }
}
