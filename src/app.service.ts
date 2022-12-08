import { Injectable,Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('RabbitMQ_Service') private rabbitmq_service: ClientProxy){}
  getHello(): string {
    return 'Hello World!';
  }

  //publishing message to rabbitmq 
  publishEvent(body) {
    this.rabbitmq_service.emit('book-created', body);
  }
}
