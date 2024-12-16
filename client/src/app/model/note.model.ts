export interface note
 {
  id: number;
  userId: string;
  title: string;
  content: string;
  reminderDate?: Date;
  daysBeforeReminder?: number;
  notificationSent?: boolean;
 }
