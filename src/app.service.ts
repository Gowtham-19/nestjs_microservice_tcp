import { Injectable,Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('RabbitMQ_Service') private rabbitmq_service: ClientProxy){}
  getHello(): string {
    return 'Hello World!';
  }

  async publishEvent(body) {
    this.rabbitmq_service.emit('book-created', body);
  }
}
