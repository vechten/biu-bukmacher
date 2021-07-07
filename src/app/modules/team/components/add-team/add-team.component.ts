import {Component, OnInit} from "@angular/core"
import {FormBuilder, FormGroup} from "@angular/forms"
import {MatDialogRef} from "@angular/material/dialog"
import {TeamService} from "src/app/services/team.service"
import {v4} from "uuid"

@Component({
  selector: "app-add-team",
  templateUrl: "./add-team.component.html",
  styleUrls: ["./add-team.component.scss"],
})
export class AddTeamComponent implements OnInit {
  teamForm: FormGroup

  constructor(
    private readonly dialogRef: MatDialogRef<AddTeamComponent>,
    private readonly teamService: TeamService,
    formBuilder: FormBuilder
  ) {
    this.teamForm = formBuilder.group({name: ""})
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close()
  }

  onSave(): void {
    const newId = v4()
    this.teamService.addSingleTeam({
      name: this.teamForm.get("name")?.value || "unknown",
      logoUrl: "",
      id: newId,
    })
    this.dialogRef.close(newId)
  }
}
