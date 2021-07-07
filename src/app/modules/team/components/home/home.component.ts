import {Component, OnInit} from "@angular/core"
import {Router} from "@angular/router"
import {Bet} from "src/app/models/bet.model"
import {BetsService} from "src/app/services/bets.service"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public latestBets: Bet[] = []

  constructor(private readonly _betService: BetsService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.fetchLatest()
  }

  fetchLatest(): void {
    this._betService.getLatestBets().subscribe((betsResponse) => {
      this.latestBets = betsResponse
    })
  }
}
