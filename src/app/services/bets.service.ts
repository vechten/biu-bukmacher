import {Injectable} from "@angular/core"
import {Observable, of} from "rxjs"
import {BetResponse} from "../models/bet-response.model"
import {Bet} from "../models/bet.model"
import {Team} from "../models/team.model"
import {BETS} from "./bets.mock"
import {TeamService} from "./team.service"

const UNKNOWN_TEAM: Team = {
  name: "nieznany",
  logoUrl: "",
  id: "-1",
}

@Injectable({
  providedIn: "root",
})
export class BetsService {
  bets: BetResponse[] = BETS
  constructor(private readonly _teamsService: TeamService) {
  }

  getLatestBets(): Observable<Bet[]> {
    return of(this.bets.map(this.mapToBet))
  }

  getTeamBets(teamId: string): Observable<Bet[]> {
    return of(
      this.bets
        .filter((b) => b.firstTeamId === teamId || b.secondTeamId === teamId)
        .map(this.mapToBet)
    )
  }

  addNewBet(bet: BetResponse) {
    this.bets.unshift(bet)
  }

  mapToBet = (response: BetResponse): Bet => {
    const {firstTeamId, secondTeamId, ...betRest} = response
    return {
      firstTeam: this._teamsService.teams.find((t) => t.id === firstTeamId) || UNKNOWN_TEAM,
      secondTeam: this._teamsService.teams.find((t) => t.id === secondTeamId) || UNKNOWN_TEAM,
      ...betRest,
    }
  }
}
