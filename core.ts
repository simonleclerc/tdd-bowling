export class Game {
  private _totalPossibleRolls = 21;
  private _rolls: number[] = [];
  private currentRoll = 0;

  public roll(pins: number) {
    this._rolls[this.currentRoll++] = pins;
  }

  public score() {
    let score = 0;
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {
      score += (this._rolls[i] ?? 0) + (this._rolls[i + 1] ?? 0);
      i += 2;
    }
    return score;
  }
}
