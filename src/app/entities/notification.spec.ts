import { Content } from './notification/content';
import { Notification } from './notifification';

describe('Notification', () => {
  it('it shold be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'social',
      recipientId: 'fake-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
