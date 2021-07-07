import { Component, Input, OnInit } from "@angular/core"
import { Bet } from "src/app/models/bet.model"
import { BetsService } from "src/app/services/bets.service"

@Component({
    selector: "single-team-bets",
    templateUrl: "./single-team-bets.component.html",
    styleUrls: ["./single-team-bets.component.scss"],
})
export class SingleTeamBetsComponent implements OnInit {
    @Input() model: string = ""
    bets: Bet[] = []
    columns: string[] = ['firstTeam', 'secondTeam'];

    constructor(private readonly _betsService: BetsService) {}

    ngOnInit(): void {
        this._betsService.getTeamBets(this.model).subscribe((bets) => {
            this.bets = bets
        })
    }
}
