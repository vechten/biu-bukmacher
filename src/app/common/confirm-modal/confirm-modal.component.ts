import {Component, Inject, OnInit} from "@angular/core"
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"

interface DialogData {
  title: string
  subtitle: string
}

@Component({
  selector: "app-confirm-modal",
  templateUrl: "./confirm-modal.component.html",
  styleUrls: ["./confirm-modal.component.scss"],
})
export class ConfirmModalComponent implements OnInit {
  constructor(
    private readonly dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close(false)
  }

  onApply() {
    this.dialogRef.close(true)
  }
}
