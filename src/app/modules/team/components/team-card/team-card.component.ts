import {Component, Input, OnInit} from "@angular/core"
import {Team} from "src/app/models/team.model"

@Component({
  selector: "team-card",
  templateUrl: "./team-card.component.html",
  styleUrls: ["./team-card.component.scss"],
})
export class TeamCardComponent implements OnInit {
  @Input() model: Team | null = null

  constructor() {
  }

  ngOnInit(): void {
  }
}
