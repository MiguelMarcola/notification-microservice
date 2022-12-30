import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class NotificationNotFound extends Error {
  constructor() {
    super('Notification not found.');
  }
}
