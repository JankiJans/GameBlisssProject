import {
    IsInt,
    IsNotEmpty,
    Length,
    IsString,
    Min,
  } from 'class-validator';
  
  export class UpdateGameDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3, 30)
    name: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(3, 30)
    category: string;
  
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    price: number;
  
    @IsNotEmpty()
    @IsString()
    @Length(5, 100)
    description: string
  
    @IsNotEmpty()
    @IsString()
    @Length(3, 30)
    producent: string
  
    @IsNotEmpty()
    @IsString()
    image: string

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    rating: number

    @IsNotEmpty()
    @IsString()
    secondImage: string

    @IsNotEmpty()
    @IsString()
    thirdImage: string
  }
  