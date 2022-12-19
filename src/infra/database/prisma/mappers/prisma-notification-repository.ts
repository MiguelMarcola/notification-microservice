import { Notification } from '@app/entities/notifification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readtAt: notification.readAt,
    };
  }
}
