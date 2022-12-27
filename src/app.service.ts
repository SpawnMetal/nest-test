import {Injectable} from '@nestjs/common'
import {log} from '@log'

@Injectable()
export class AppService {
  getHello(): string {
    log()
    return 'Hello World!'
  }
}
