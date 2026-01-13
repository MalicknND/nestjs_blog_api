import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  findAll() {
    return [
      { id: 1, name: 'Technology' },
      { id: 2, name: 'Health' },
    ];
  }

  findOne(id: number) {
    return { id, name: `Category #${id}` };
  }

  create(createCategoryDto: any) {
    console.log(createCategoryDto);
    return { id: 3, ...createCategoryDto };
  }
}
