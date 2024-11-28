import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CartsModule } from './carts/carts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,         // Módulo de usuarios
    ProductsModule,      // Módulo de productos
    CategoriesModule,    // Módulo de categorías
    CartsModule,         // Módulo de carrito
    TypeOrmModule.forRoot({
      type: 'postgres',   // Asegúrate de que la configuración sea la correcta para tu DB
      host: 'localhost',
      port: 5432,
      username: 'yourUsername',
      password: 'yourPassword',
      database: 'yourDatabase',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // En producción nunca deberías usar synchronize=true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
