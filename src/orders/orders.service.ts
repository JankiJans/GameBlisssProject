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

  public async create(orderData: CreateOrderDTO): Promise<OrderItem> {
    const { productId, ...clientData } = orderData;

    let client: Client;
    try {
      client = await this.prismaService.client.create({
        data: {
          amount: clientData.amount,
          quantity: clientData.quantity,
          email: clientData.email,
          name: clientData.name,
          address: clientData.address,
          payment: clientData.payment,
          delivery: clientData.delivery,
          note: clientData.note,
        },
      });
    } catch (error) {
      throw new BadRequestException('Failed to create client');
    }

    try {
      return await this.prismaService.orderItem.create({
        data: {
          product: {
            connect: { id: productId },
          },
          client: {
            connect: { id: client.id },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new BadRequestException("Product doesn't exist");
      }
      throw error;
    }
  }
}

