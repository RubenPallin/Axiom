import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Post()
  async create(@Body() body: { name: string, description: string, price: number, image_url: string, categoryId: number }) {
    return this.productsService.create(body.name, body.description, body.price, body.image_url, body.categoryId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }
}