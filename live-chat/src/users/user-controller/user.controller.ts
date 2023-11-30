import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserRegister } from './user-dto/user.dto';
import { UserService } from '../user-service/user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @HttpCode(201)
   createUser(@Body() requestBody: any) {
 
    return this.userService.CreateUser(requestBody);
  }

  @Post("singin")
  @HttpCode(200)
  signUserin(@Body() requestBody: any) {
      return this.userService.SingInUser(requestBody)
  }
}
