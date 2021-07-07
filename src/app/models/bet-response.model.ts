
export interface BetResponse {
  id: string
  createdAt: Date
  firstTeamId: string
  secondTeamId: string
  betDetails: {
      firstTeamWon: number
      secondTeamWon: number
      draw: number
  }
}
