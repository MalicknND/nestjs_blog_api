import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  // inject PostsService via constructor
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id') // Correspond à GET /posts/1, GET /posts/abc, etc.
  findOne(@Param('id') id: string) {
    // Récupère le paramètre 'id' de l'URL
    return `This action returns a #${id} post`;
  }

  @Post()
  create(@Body() createPostDto: any) {
    console.log(createPostDto);
    return 'This action adds a new post';
  }
}
