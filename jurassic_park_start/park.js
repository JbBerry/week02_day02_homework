class Park{

  constructor(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
  };

  addDinosaur(dinosaur){
    this.dinoCollection.push(dinosaur);
  };

  removeDinosaur(dinosaur){
    for (let i = this.dinoCollection.length-1; i >= 0; i--){
      if (this.dinoCollection[i] == dinosaur){
        this.dinoCollection.splice(i,1);
      };
    };
  };

  findPopularDinosaur(){
    let mostPopularDinosaur = this.dinoCollection[0];
    for (var i = 1; i < this.dinoCollection.length; i++) {
      if (this.dinoCollection[i].guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay){
        mostPopularDinosaur = this.dinoCollection[i];
      };
    };
    return mostPopularDinosaur;
  };

  findDinosaurBySpecies(species){
    let speciesCollection = [];
    for (let i = 0; i <this.dinoCollection.length; i++){
      if (this.dinoCollection[i].species == species){
        speciesCollection.push (this.dinoCollection[i]);
      };
    };
    return speciesCollection;
  };

  removeDinosaurBySpecies(species){
    for (let i = this.dinoCollection.length-1; i >= 0; i--){
      if (this.dinoCollection[i].species == species){
        this.dinoCollection.splice(i,1);
      };
    };
  };

  visitorsPerDay(){
    let tickets = 0;
    for (var i = 0; i < this.dinoCollection.length; i++) {
      tickets += this.dinoCollection[i].guestsAttractedPerDay;
    };
    return tickets;
  };

  visitorsPerYear(){
    return (this.visitorsPerDay() * 365);
  };

  revenuePerYear(){
    return this.visitorsPerYear() * this.ticketPrice;
  };

  dinosaursByDiet(){
    let diet = {
      carnivore:0,
      herbivore:0,
      omnivore:0
    };
    for (var i = 0; i < this.dinoCollection.length; i++) {
      switch(this.dinoCollection[i].diet){
        case 'carnivore':
          diet.carnivore += 1;
          break;
        case 'herbivore':
          diet.herbivore += 1;
          break;
        case 'omnivore':
          diet.omnivore += 1;
          break;
      };
    };
  return diet;
  };

}
module.exports = Park;
