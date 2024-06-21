import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsString()
    username: string;

    @IsString()
    birthdate: string;

    @IsInt()
    age: number;
}
