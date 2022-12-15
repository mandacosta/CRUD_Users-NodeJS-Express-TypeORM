import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeInsert,
  DeleteDateColumn,
} from "typeorm";

@Entity("users")
class user {
  @Column({ length: 200 })
  name: string;

  @Column({ length: 200 })
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @BeforeUpdate()
  @BeforeInsert()
  cryptPassword() {
    this.password = hashSync(this.password, 10);
  }

  @DeleteDateColumn()
  deletedAt: Date;
}

export default user;
