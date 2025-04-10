import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateChefDto } from "./dto/chef/create-chef.dto";
import { ResponseChefDto } from "./dto/chef/response-chef.dto";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('chef')
  async createChef(
    @Body() createUserDto: CreateChefDto
  ): Promise<
  ResponseChefDto
  >{
    return this.userService.createUser(createUserDto)
  }
}