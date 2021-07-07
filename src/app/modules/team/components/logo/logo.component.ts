import {Component, Input, OnInit} from "@angular/core"

@Component({
  selector: "team-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.scss"],
})
export class LogoComponent implements OnInit {
  @Input() logoUrl: string | undefined

  constructor() {
  }

  ngOnInit(): void {
  }
}
