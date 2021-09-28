import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }

  getParticipants() {
    return [
      {name:'Kobe Bryant', gender:'male', age:46},
      {name:'Lebron James', gender:'male', age:38},
      {name:'Serena Williams', gender:'female', age:35},
      {name:'Maria Sharapova', gender:'female', age:40},
      {name:'Jr Smith', gender:'male', age:42},
      {name:'Stephen Curry', gender:'male', age:34},
      {name:'Michael Jordan', gender:'male', age:50},
      {name:'Alex Morgan', gender:'female', age:23},
      {name:'Lindsey Vonn', gender:'female', age:26},
      {name:'Kyrie Irving', gender:'male', age:39},
    ];
  }
}
