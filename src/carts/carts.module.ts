import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carts } from './carts.entity';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carts])], // Importa la entidad Cart
  providers: [CartsService], // Agrega el servicio del carrito
  controllers: [CartsController], // Agrega el controlador del carrito
})
export class CartsModule {}
