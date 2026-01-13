import { SetMetadata } from '@nestjs/common';

export const Categories = (...args: string[]) => SetMetadata('categories', args);
