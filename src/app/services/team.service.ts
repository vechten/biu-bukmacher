import {Injectable} from "@angular/core"
import {Observable, of} from "rxjs"
import {Team} from "../models/team.model"
import {TEAMS} from "./teams.mock"

@Injectable({
  providedIn: "root",
})
export class TeamService {
  teams: Team[] = TEAMS

  constructor() {
  }

  getTeams(): Observable<Team[]> {
    return of(this.teams)
  }

  getSingleTeam(teamId: string): Observable<Team | undefined> {
    return of(this.teams.find((team) => team.id === teamId))
  }

  updateSingleTeam(teamId: string, changedObj: Partial<Team>) {
    const teamToChange = this.teams.find((team) => team.id === teamId)
    this.teams = this.teams.filter((team) => team.id !== teamId)
    if (teamToChange) {
      this.teams.unshift({...teamToChange, ...changedObj})
    }
  }

  addSingleTeam(teamObject: Team) {
    this.teams.unshift(teamObject)
  }

  removeSingleTeam(teamId: string) {
    this.teams = this.teams.filter((team) => team.id !== teamId)
  }
}
