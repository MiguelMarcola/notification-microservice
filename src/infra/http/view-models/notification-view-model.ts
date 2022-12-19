import { Notification } from '@app/entities/notifification';

export class NotificationViewModel {
  static toHTPP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
