import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  @IsEnum(['stars', 'nunchucks'], {
    message: 'Weapon must be either stars or nunchucks',
  })
  weapon: 'stars' | 'nunchucks';
}
