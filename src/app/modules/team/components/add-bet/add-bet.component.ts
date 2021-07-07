import {Component, OnInit} from "@angular/core"
import {FormBuilder, FormGroup} from "@angular/forms"
import {Router} from "@angular/router"
import {Team} from "src/app/models/team.model"
import {BetsService} from "src/app/services/bets.service"
import {TeamService} from "src/app/services/team.service"
import {v4} from "uuid"

@Component({
  selector: "app-add-bet",
  templateUrl: "./add-bet.component.html",
  styleUrls: ["./add-bet.component.scss"],
})
export class AddBetComponent implements OnInit {
  betForm: FormGroup

  teamsToSelect: Team[] = []
  firstTeamSelected: Team | undefined
  secondTeamSelected: Team | undefined

  constructor(
    private readonly teamService: TeamService,
    private readonly betService: BetsService,
    private readonly router: Router,
    formBuilder: FormBuilder
  ) {
    this.betForm = formBuilder.group({
      firstTeamId: "",
      secondTeamId: "",
      firstTeamWon: "0.0",
      secondTeamWon: "0.0",
      draw: "0.0",
    })
  }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((teams) => {
      this.teamsToSelect = teams
    })
    this.betForm.get("firstTeamId")?.valueChanges.subscribe((value) => {
      this.firstTeamSelected = this.teamsToSelect.find((v) => v.id === value)
    })
    this.betForm.get("secondTeamId")?.valueChanges.subscribe((value) => {
      this.secondTeamSelected = this.teamsToSelect.find((v) => v.id === value)
    })
  }

  save() {
    const {
      firstTeamId,
      secondTeamId,
      firstTeamWon,
      secondTeamWon,
      draw,
    } = this.betForm.value

    this.betService.addNewBet({
      id: v4(),
      createdAt: new Date(),
      firstTeamId,
      secondTeamId,
      betDetails: {
        firstTeamWon,
        secondTeamWon,
        draw,
      },
    })

    this.router.navigateByUrl("/")
  }
}
