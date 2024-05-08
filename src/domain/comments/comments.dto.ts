import { Length } from 'class-validator';

export class CreateCommentsDto {
  @Length(1, 10)
  nickname: string;

  @Length(1, 50)
  content: string;

  @Length(1, 10)
  password: string;
}

export class UpdateCommentsDto {
  id: number;

  @Length(1, 50)
  content: string;

  @Length(1, 10)
  password: string;
}

export class DeleteCommentsDto {
  id: number;

  @Length(1, 10)
  password: string;
}
