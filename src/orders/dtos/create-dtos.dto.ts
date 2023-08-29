import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length, Min, IsUUID, IsNumber } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;

  // @IsNotEmpty()
  // @IsString()
  // @Length(5, 30)
  // client: string;

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
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
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