export class CreateNovelDto {
  title: string;
  other_titles: string | null;
  file_name: string;
  description: string;
  chapters: number;
  country: string;
  state: string;
  genres: Array<string>;
  tags: Array<string>;
}
