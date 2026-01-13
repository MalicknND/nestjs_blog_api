import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  // Define your service methods here
  findAll() {
    return [
      { id: 1, title: 'First Post', content: 'This is the first post.' },
      { id: 2, title: 'Second Post', content: 'This is the second post.' },
    ];
  }
}
