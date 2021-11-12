import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { Post } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
     CategoriesModule,
     PostsModule,
     TypeOrmModule.forFeature(
      [Category, Post],
    ),
    TypeOrmModule.forRoot({autoLoadEntities: true,}),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
