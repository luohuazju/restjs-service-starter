import { IsInt, IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly language: string;
}