import { Injectable,Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy){}
  getHello(): string {
    return 'Hello World!';
  }

  async publishEvent(body) {
    this.client.emit('book-created', body);
  }
}
