import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderItem, Client } from '@prisma/client';
import { CreateOrderDTO } from './dtos/create-dtos.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<OrderItem[]> {
    return this.prismaService.orderItem.findMany({
      include: { product: true, client: true },
    });
  }

  public getById(id: OrderItem['id']): Promise<OrderItem | null> {
    return this.prismaService.orderItem.findUnique({
      where: { id },
      include: { product: true, client: true },
    });
  }

  public async create(
    orderData: Omit<OrderItem, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<OrderItem> {
    const { productId, clientId, ...otherData } = orderData;
    try {
      return await this.prismaService.orderItem.create({
        data: {
          ...otherData,
          product: {
            connect: { id: productId },
          },
          client: {
            connect: { id: clientId }
          }
        },
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new BadRequestException("Product doesn't exist");
      throw error;
    }
  }
}
  
  




