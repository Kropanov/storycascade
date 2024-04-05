export class CreateNovelDto {
  id: number;
  title: string | null;
  image: string | null;
  description: string | null;
  rating: number | null;
  genre: string | null;
}
