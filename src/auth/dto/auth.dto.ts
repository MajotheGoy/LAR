import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, IsIn } from 'class-validator';

export class AuthDto {
  @ApiProperty({ example: 'majo@example.com', description: 'The email address of the account' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'gataw123', description: 'Account password (minimum 6 characters)' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'majonez', description: 'username', required: false })
  @IsString()
  @IsOptional()
  username: string;

  @ApiProperty({ 
    example: 'Majonez', 
    description: 'fullname', 
    required: false 
  })
  @IsString()
  @IsOptional()
  fullname?: string;

  // 🌟 NEW FIELD: Dropdown selection for garage roles in Swagger & frontend forms
  @ApiProperty({ 
    example: 'customer', 
    description: 'Account access role within the custom garage tracking system', 
    enum: ['customer', 'mods'],
    required: false,
    default: 'customer'
  })
  @IsString()
  @IsOptional()
  @IsIn(['customer', 'mods'], { message: 'Role must be either customer or mods' })
  role?: string;
}