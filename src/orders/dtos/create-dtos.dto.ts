import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length, Min, IsUUID, IsNumber,IsArray } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsArray()
  productId: string[];

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number

  @IsNotEmpty()
  @IsNumber()
  quantity: number

  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  payment: string

  @IsNotEmpty()
  @IsString()
  delivery: string

  @IsNotEmpty()
  @IsString()
  note: string
}