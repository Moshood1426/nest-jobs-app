import { IsString, IsEmail, Length } from 'class-validator';

export class RegisterBodyDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(6)
  password: string;

  @IsString()
  @Length(3, 50)
  name: string;
}
