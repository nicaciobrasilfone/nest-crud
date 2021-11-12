import { type } from 'os';
import { Category } from 'src/categories/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId} from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;
    
    @Column()
    author: string;

    @ManyToOne(() => Category, (category: Category) => category.posts, { onDelete: 'CASCADE' })
    public category: Category;

    @RelationId((post:Post)=>post.category)
    categoryId: number;
}
