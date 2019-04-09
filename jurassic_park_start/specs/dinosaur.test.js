const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(() => {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
  });

  test('should have a species',  () => {
    expect(dinosaur.species).toBe('t-rex');
  });

  test('should have a diet', () => {
    expect(dinosaur.diet).toBe('carnivore');
  });

  test('should have an average number of visitors it attracts per day', () => {
    expect(dinosaur.guestsAttractedPerDay).toBe(50);
  });

});
