import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './orders/orders.module';
import configuration from './config/configuration';

@Module({
  imports: [ProductsModule, UsersModule, AuthModule, ConfigModule.forRoot({
    load: [configuration],
    isGlobal: true
  }), OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}