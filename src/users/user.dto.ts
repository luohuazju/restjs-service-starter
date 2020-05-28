import { IsInt, IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly language: string;
}