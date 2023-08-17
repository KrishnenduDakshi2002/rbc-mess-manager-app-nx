import { Injectable } from '@nestjs/common';
import 'dotenv/config';
@Injectable()
export class AppService {
  getData(): { message: string } {
    return {
      message: `Hello RBC - This is our RBC Mess API ${process.env.S3_BUCKET}`,
    };
  }
}
