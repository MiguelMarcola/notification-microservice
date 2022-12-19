import { Controller, Body, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/useCases/send-notification';
import { createNotificationBodyDto } from '../dtos/create-notification-validator.dto';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async create(@Body() data: createNotificationBodyDto) {
    const { notification } = await this.sendNotification.execute(data);

    return { notification: NotificationViewModel.toHTPP(notification) };
  }
}
