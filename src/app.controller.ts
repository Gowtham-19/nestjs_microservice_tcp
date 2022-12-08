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
    console.log("data of received body",body)
    this.appService.publishEvent(body)
    return {"message":"data received"}
  }

  @EventPattern('book_created')
  async handleBookCreatedEventResponse(response) {
    console.log("response of event",response);
  }

}
