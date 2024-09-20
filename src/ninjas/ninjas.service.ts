import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

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

  getOneNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      return 'Ninja not found';
    }
    return ninja;
  }

  createNinja(ninja: CreateNinjaDto) {
    const newNinja = {
      id: this.ninjas.length + 1,
      ...ninja,
    };
    this.ninjas.push(newNinja);

    return ninja;
  }
}
