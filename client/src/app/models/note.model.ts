export interface Note {
  id?: string;
  title: string;
  content: string;
  category: string;
  reminder?: Date;
  createdAt: Date;
  updatedAt: Date;
}
