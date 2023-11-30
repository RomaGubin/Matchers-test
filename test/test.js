import heroRating from "../src/hero rating.js";

test('hero rating', () => {
  const reference = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];

  const test = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  const result = heroRating(test);
  expect(result).toEqual(reference);
});
