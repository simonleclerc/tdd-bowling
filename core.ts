export class Game {
  private _totalPossibleRolls = 21;
  private _rolls: number[] = [];
  private currentRoll = 0;

  public roll(pins: number) {
    this._rolls[this.currentRoll++] = pins;
  }

  public score() {
    let score = 0
    for (let i = 0; i < this._totalPossibleRolls; i++) {
      score += this._rolls[i] ?? 0;
    }
    return score;
  }
}
