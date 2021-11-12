import { Post } from 'src/posts/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Post, (post: Post) => post.category, { cascade: ['insert', 'update'] })
    public posts: Post[];
}
