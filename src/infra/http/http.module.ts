import { Module } from '@nestjs/common';
import { SendNotification } from '@application/useCases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/useCases/cancel-notification';
import { CountRecipientNotification } from '@application/useCases/count-recipient-notification';
import { GetRecipientNotification } from '@application/useCases/get-recipient-notification';
import { UnreadNotification } from '@application/useCases/unread-notification';
import { ReadNotification } from '@application/useCases/read-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotification,
    CountRecipientNotification,
  ],
})
export class HttpModule {}
