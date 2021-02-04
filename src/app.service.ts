import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNumbers() {
    return [1, 2, 3, 4, 5];
  }
}
