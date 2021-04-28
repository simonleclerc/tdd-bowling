import { Game } from "./core";

describe("Bowling Game", () => {
  let g: Game;

  beforeEach(() => {
    g = new Game();
  });

  it("can roll", () => {
    g.roll(0);
  });

  it("rolls only in the gutter", () => {
    for (let i = 0; i < 20; i++) {
      g.roll(0);
    }

    expect(g.score()).toEqual(0);
  });

  it("rolls each time over 1 pin only", () => {
    for (let i = 0; i < 20; i++) {
      g.roll(1);
    }

    expect(g.score()).toEqual(20);
  })
});
