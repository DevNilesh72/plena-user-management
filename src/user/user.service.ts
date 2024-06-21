import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUserDto } from './dto/search-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  findAll() {
    return `This action returns all user`;
  }

  search(serchUserDto: SearchUserDto) {
    if(Object.keys(serchUserDto).length === 0){
      throw new HttpException({
        statusCode: HttpStatus.BAD_REQUEST,
        error: 'Serch parameter not provided',
      }, HttpStatus.BAD_REQUEST);
    }
    return serchUserDto;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {id, ...updateUserDto};
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
