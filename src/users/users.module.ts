import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]), // Importa la entidad User en este módulo
    JwtModule.register({
      secret: 'yourSecretKey',  // Asegúrate de cambiar este valor por algo más seguro
      signOptions: { expiresIn: '1h' }, // Opcional: El token JWT expirará en 1 hora
    }),
  ],
  providers: [UsersService], // Agrega el servicio de usuarios
  controllers: [UsersController], // Agrega el controlador de usuarios
})
export class UsersModule {}
