import { Content } from '@application/entities/notification/content';
import { Notification, NotificationProps } from '@application/entities/notifification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a notification'),
    category: 'social',
    recipientId: 'recipient-id',
    ...override,
  });
}
