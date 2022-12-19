import { Content } from '@app/entities/notification/content';
import { Notification, NotificationProps } from '@app/entities/notifification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a notification'),
    category: 'social',
    recipientId: 'recipient-id',
    ...override,
  });
}
