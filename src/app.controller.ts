import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getData(@Body() body){
    this.appService.publishEvent(body)
    return {"message":"data received"}
  }

  @EventPattern('response_event')
  async handleBookCreatedEventResponse(response) {
    console.log("response of event from rabbitmq",response);
  }

}
