export class CreateCommentDto {
  id?: number;
  userId: number;
  novelsId: number;
  parentCommentId: number;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}
