export interface Note {
  id?: string;
  title: string;
  content: string;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
  reminder?: Date;
  daysBeforeReminder?: number;
  notificationSent?: boolean;
}
