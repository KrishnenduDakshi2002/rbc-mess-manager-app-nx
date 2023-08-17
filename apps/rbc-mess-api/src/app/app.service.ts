import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello RBC - This is our RBC Mess API for mess management' };
  }
}
