import { Game } from "./core";

describe("Bowling Game", () => {
  it("can create game", () => {
    const g = new Game();
  });

  it("can roll", () => {
    const g = new Game();
    g.roll(0);
  });
});
