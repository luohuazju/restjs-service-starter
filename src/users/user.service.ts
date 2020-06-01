import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(dto: UserDTO): Promise<User> {
    const user = new User();
    user.age = dto.age;
    user.username = dto.username;
    user.password = dto.password;
    user.language = dto.language;
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findOneByUserName(username: string): Promise<User> {
    return this.userRepository.findOne({ username: username });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
