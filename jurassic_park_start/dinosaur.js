class Dinosaur{

  constructor(species, diet, guestsAttractedPerDay) {
    this.species = species;
    this.diet = diet;
    this._guestsAttractedPerDay = guestsAttractedPerDay;
  }

  get guestsAttractedPerDay(){
    return this._guestsAttractedPerDay;
  }

  set guestsAttractedPerDay(numGuests){
    this._guestsAttractedPerDay = numGuests;
  }

}
module.exports = Dinosaur;
