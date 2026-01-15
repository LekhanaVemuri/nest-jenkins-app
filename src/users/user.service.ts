import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  create(name: string, email: string) {
    return this.repo.save({ name, email });
  }

  findAll() {
    return this.repo.find();
  }
}

