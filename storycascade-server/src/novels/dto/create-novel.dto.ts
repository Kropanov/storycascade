export class CreateNovelDto {
  title: string;
  other_titles: string | null;
  description: string;
  chapters: number;
  country: string;
  state: string;
  genres: Array<string>;
  tags: Array<string>;
  image: string;
}
