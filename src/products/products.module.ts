import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Products])], // Importa la entidad Product
  providers: [ProductsService], // Agrega el servicio de productos
  controllers: [ProductsController], // Agrega el controlador de productos
})
export class ProductsModule {}
