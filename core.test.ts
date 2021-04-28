import { Game } from "./core";

describe("Bowling Game", () => {
  let g: Game;

  beforeEach(() => {
    g = new Game();
  });

  it("rolls only in the gutter", () => {
    rollMany(20, 0);
    expect(g.score()).toEqual(0);
  });

  it("rolls each time over 1 pin only", () => {
    rollMany(20, 1);
    expect(g.score()).toEqual(20);
  });

  it.skip("rolls and do one spare", () => {
    g.roll(5);
    g.roll(5); // spare
    g.roll(3);
    rollMany(17, 0);

    expect(g.score()).toEqual(16);
  });

  const rollMany = (n: number, pins: number) => {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  };
});
