/* eslint-disable prettier/prettier */
import { Notification } from '@app/entities/notifification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { filter } from 'rxjs';

export class InMemoryNotificationsRepository
  implements NotificationsRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find((item) => item.id === notificationId)

    if (!notification) {
      return null
    }

    return notification
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter((notification) => notification.recipientId === recipientId).length
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex((item) => item.id === notification.id)

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}