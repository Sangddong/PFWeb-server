export type CreateCommentsDto = {
  nickname: string;
  content: string;
  password: string;
};

export type UpdateCommentsDto = {
  id: number;
  content: string;
  password: string;
};
