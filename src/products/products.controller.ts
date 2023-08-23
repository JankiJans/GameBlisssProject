import { Controller, Get, Param, ParseUUIDPipe, Body, Post, Put, Delete, NotFoundException, UseGuards} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateGameDTO } from './dtos/create-product.dto';
import { UpdateGameDTO } from './dtos/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.getById(id);
    if (!product) throw new Error('Product not found');
    return product;
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  create(@Body() bookData: CreateGameDTO) {
    return this.productsService.create(bookData);
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateGameDTO,
  ) {
    if (!(await this.productsService.getById(id)))
      throw new NotFoundException('Game not found');

    await this.productsService.updateById(id, productData);
    return { success: true };
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.productsService.getById(id)))
      throw new NotFoundException('Game not found');
    await this.productsService.deleteById(id);
    return { success: true };
  }
}