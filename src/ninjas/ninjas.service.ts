import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 1,
      name: 'Ryu',
      weapon: 'stars',
    },
    {
      id: 2,
      name: 'Ken',
      weapon: 'nunchucks',
    },
    {
      id: 3,
      name: 'Hayabusa',
      weapon: 'stars',
    },
    {
      id: 4,
      name: 'Yoshi',
      weapon: 'nunchucks',
    },
    {
      id: 5,
      name: 'Kunimitsu',
      weapon: 'stars',
    },
  ];

  getNinjas(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }
}
