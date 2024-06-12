export class CreateNovelDto {
  title: string;
  other_titles: string | null;
  description: string;
  chapters: number;
  state_id: number;
  country: string;
}
