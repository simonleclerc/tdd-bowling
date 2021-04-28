import { Game } from "./core";

describe("Bowling Game", () => {
  let g: Game;

  beforeEach(() => {
    g = new Game();
  });

  it("can roll", () => {
    g.roll(0);
  });
});
