export class Game {
  private _score = 0;

  public roll(pins: number) {
    this._score += pins;
  }

  public score() {
    return this._score;
  }
}
