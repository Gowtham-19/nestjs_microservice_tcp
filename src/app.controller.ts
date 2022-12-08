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

    //api trigger to rabbitmq service
  @Post()
  getData(@Body() body){
    this.appService.publishEvent(body)
    //returning reponse by with out any waiting for service result
    return {"message":"data received"}
  }

  //event to receive reponse from rabbitmq service
  @EventPattern('response_event')
  async handleBookCreatedEventResponse(response) {
    console.log("response of event from rabbitmq",response);
  }

}
