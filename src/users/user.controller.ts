import { Body, Controller, Get, Param, Post, UseGuards, Delete } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() dto: UserDTO): Promise<User> {
    return this.userService.create(dto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id')id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Get('/username/:username')
  findOneByUserName(@Param('username') username: string): Promise<User> {
    return this.userService.findOneByUserName(username);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
