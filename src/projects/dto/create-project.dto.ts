import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsIn } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'Chevy Camaro SS 2017' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'Drift Build', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d', required: false })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({ 
    example: 'WIP', 
    description: 'Current development/build status stage of the vehicle asset', 
    enum: ['Planning', 'WIP', 'Complete'],
    required: false,
    default: 'WIP'
  })
  @IsOptional()
  @IsString()
  @IsIn(['Planning', 'WIP', 'Complete'], { message: 'Status must be Planning, WIP, or Complete' })
  status?: string;
}