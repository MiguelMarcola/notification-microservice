import { CancelNotification } from '@application/useCases/cancel-notification';
import { CountRecipientNotification } from '@application/useCases/count-recipient-notification';
import { GetRecipientNotification } from '@application/useCases/get-recipient-notification';
import { ReadNotification } from '@application/useCases/read-notification';
import { UnreadNotification } from '@application/useCases/unread-notification';
import { Controller, Body, Post } from '@nestjs/common';
import { Get, Param, Patch } from '@nestjs/common/decorators';
import { SendNotification } from 'src/app/useCases/send-notification';
import { createNotificationBodyDto } from '../dtos/create-notification-validator.dto';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private getRecipientNotification: GetRecipientNotification,
    private countRecipientNotification: CountRecipientNotification,
  ) {}

  @Post()
  async create(@Body() data: createNotificationBodyDto) {
    const { notification } = await this.sendNotification.execute(data);

    return { notification: NotificationViewModel.toHTPP(notification) };
  }

  @Get('/count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotification.execute({
      recipientId,
    });

    return { count };
  }

  @Get('/from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotification.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTPP),
    };
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    });
  }
}
