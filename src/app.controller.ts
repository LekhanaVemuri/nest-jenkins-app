import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get()
  status() {
    return {
      app: 'NestJS App',
      status: 'Running',
      deployedBy: 'Jenkins CI/CD',
    };
  }
}

