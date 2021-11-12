import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    let min = Math.ceil(123);
    let max = Math.floor(33);
    let id = Math.floor(Math.random() * (max - min)) + min;
    return this.postRepository.query(`INSERT INTO post VALUES ('${id}','${createPostDto.title}', '${createPostDto.content}', '${createPostDto.author}', '${createPostDto.categoryId}') `)
    // return this.postRepository.save(createPostDto)
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
