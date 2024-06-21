import { IsString, IsInt, IsOptional } from 'class-validator';

export class SearchUserDto {
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsInt()
  minage: number;

  @IsOptional()
  @IsInt()
  maxage: number;
}
