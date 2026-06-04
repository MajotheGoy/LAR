import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'majo@example.com', description: '' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'gataw123', minLength: 6, description: '' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}