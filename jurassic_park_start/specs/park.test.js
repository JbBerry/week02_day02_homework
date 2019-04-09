const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {
  let jurassicPark;
  let tRex;
  let triceratops;
  let velociraptor;
  let stegosaurus;

  beforeEach( () => {
    jurassicPark = new Park('Jurassic Park', 10);
    tRex = new Dinosaur('t-rex', 'carnivore', 50);
    triceratops = new Dinosaur ('triceratops', 'herbivore', 25);
    velociraptor = new Dinosaur ('velociraptor', 'omnivore', 60);
    stegosaurus = new Dinosaur ('stegosaurus', 'herbivore', 20)
  })

  test('should have a name', () => {
    expect(jurassicPark.name).toBe('Jurassic Park');
  });

  test('should have a ticket price', () => {
    expect(jurassicPark.ticketPrice).toBe(10);
  });

  test('should have a collection of dinosaurs', () => {
    jurassicPark.addDinosaur(tRex);
    expect(jurassicPark.dinoCollection.length).toBe(1);
  });

  test('should have a collection of dinosaurs', () => {
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(triceratops);
    expect(jurassicPark.dinoCollection.length).toBe(2);
  });

  test('should be able to remove a dinosaur from its collection', () => {
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(triceratops);
    jurassicPark.addDinosaur(velociraptor);
    jurassicPark.addDinosaur(stegosaurus);
    jurassicPark.removeDinosaur(tRex);
    expect(jurassicPark.dinoCollection.length).toBe(3);
  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(triceratops);
    jurassicPark.addDinosaur(velociraptor);
    jurassicPark.addDinosaur(stegosaurus);
    expect(jurassicPark.findPopularDinosaur()).toBe(velociraptor);
  });

  test('should be able to find all dinosaurs of a particular species', () => {
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(velociraptor);
    jurassicPark.addDinosaur(stegosaurus);
    expect(jurassicPark.findDinosaurBySpecies('t-rex')).toEqual([tRex, tRex]);
  });



  test('should be able to Calculate the total number of visitors per day', () => {
    // assuming each visitor only gets to see one dinosaur per day
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(triceratops);
    jurassicPark.addDinosaur(velociraptor);
    jurassicPark.addDinosaur(stegosaurus);
    expect(jurassicPark.visitorsPerDay()).toBe(155)
  });

  test('should be able to Calculate the total number of visitors per year', () => {
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(triceratops);
    jurassicPark.addDinosaur(velociraptor);
    jurassicPark.addDinosaur(stegosaurus);
    expect(jurassicPark.visitorsPerYear()).toBe(56575)
  });

  test('should be able to Calculate the total revenue from ticket sales for one year', () => {
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(triceratops);
    jurassicPark.addDinosaur(velociraptor);
    jurassicPark.addDinosaur(stegosaurus);
    expect(jurassicPark.revenuePerYear()).toBe(565750)
  });

  test('should be able to remove all dinosaurs of a particular species', () => {
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(velociraptor);
    jurassicPark.addDinosaur(stegosaurus);
    jurassicPark.removeDinosaurBySpecies('t-rex');
    expect(jurassicPark.dinoCollection).toEqual([velociraptor, stegosaurus]);
  });

  test('should be able to count how many dinosaurs have what type of diet', () => {
    jurassicPark.addDinosaur(tRex);
    jurassicPark.addDinosaur(triceratops);
    jurassicPark.addDinosaur(velociraptor);
    jurassicPark.addDinosaur(stegosaurus);
    expect(jurassicPark.dinosaursByDiet()).toEqual({"carnivore": 1, "herbivore": 2, "omnivore": 1})
  });

});
