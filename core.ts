export class Game {
  private _rolls: number[] = [];
  private currentRoll = 0;

  public roll(pins: number) {
    this._rolls[this.currentRoll++] = pins;
  }

  public score() {
    let score = 0;
    let firstInFrame = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(firstInFrame)) {
        score +=
          10 + this.nextTwoBallsForStrike(firstInFrame);
        firstInFrame++;
      } else if (this.isSpare(firstInFrame)) {
        score += 10 + this.nextBallForSpare(firstInFrame);
        firstInFrame += 2;
      } else {
        score += this.twoBallsInFrame(firstInFrame);
        firstInFrame += 2;
      }
    }
    return score;
  }

  private twoBallsInFrame(firstInFrame: number) {
    return this._rolls[firstInFrame] + this._rolls[firstInFrame + 1];
  }

  private nextBallForSpare(firstInFrame: number) {
    return this._rolls[firstInFrame + 2];
  }

  private nextTwoBallsForStrike(firstInFrame: number) {
    return this._rolls[firstInFrame + 1] + this._rolls[firstInFrame + 2];
  }

  private isStrike(firstInFrame: number) {
    return this._rolls[firstInFrame] == 10;
  }

  private isSpare(firstInFrame: number) {
    return this._rolls[firstInFrame] + this._rolls[firstInFrame + 1] == 10;
  }
}
