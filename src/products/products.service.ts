import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public async getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: { gallery: true, systemRequirements: true, orderItems: true},
    });
  }

  public getById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: { gallery: true, systemRequirements: true, orderItems: true },
    });
  }

  public async create(productData: Omit<Product, 'id'>): Promise<Product> {
    try {
      return await this.prismaService.product.create({
        data: productData,
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Game already exists in the store!');
      throw error;
    }
  }

  
  public async updateById(
    id: Product['id'],
    productData: Omit<Product, 'id'>,
  ): Promise<Product> {
    try {
      return await this.prismaService.product.update({
        where: { id },
        data: productData,
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Game already exists in the store!');
      throw error;
    }
  }

  public deleteById(id: Product['id']): Promise<Product> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }
}