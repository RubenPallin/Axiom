import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';
import { Categories } from '../categories/categories.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async findAll(): Promise<Products[]> {
    return this.productsRepository.find({ relations: ['category'] }); // Esto está bien
  }

  async create(
    name: string,
    description: string,
    price: number,
    image_url: string,
    categoryId: number,
  ): Promise<Products> {
    const category = await this.categoriesRepository.findOne({
      where: { id: categoryId }, 
    });
    if (!category) {
      throw new Error('Category not found');
    }

    const product = this.productsRepository.create({
      name,
      description,
      price,
      image_url,
      category,
    });
    return this.productsRepository.save(product);
  }

  async findOne(id: number): Promise<Products> {
    return this.productsRepository.findOne({
      where: { id },              
      relations: ['category'], 
    });
  }
}
