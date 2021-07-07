import {Component, Input, OnInit} from "@angular/core"
import {Bet} from "src/app/models/bet.model"

@Component({
  selector: "home-match-card",
  templateUrl: "./match-card.component.html",
  styleUrls: ["./match-card.component.scss"],
})
export class MatchCardComponent implements OnInit {
  @Input() model: Bet | null = null

  constructor() {
  }

  ngOnInit(): void {
  }
}
