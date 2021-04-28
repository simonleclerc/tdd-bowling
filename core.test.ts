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

  it("rolls and do one spare", () => {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);

    expect(g.score()).toEqual(16);
  });

  it("rolls and do one strike", () => {
    g.roll(10); //strike
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);

    expect(g.score()).toEqual(24);
  });

  const rollSpare = () => {
    g.roll(5);
    g.roll(5);
  };

  const rollMany = (n: number, pins: number) => {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  };
});
