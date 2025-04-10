import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { UserFactory } from "./factory/user.factory";
import { CreateChefDto } from "./dto/chef/create-chef.dto";
import { ResponseChefDto } from "./dto/chef/response-chef.dto";

@Injectable()
export class UserService {
  constructor(
    private readonly userFactory: UserFactory
  ) {}

  async createUser(
    createUser: CreateChefDto 
  ): Promise<
  ResponseChefDto
  >{
    try{
      return await this.userFactory.handleFactory(createUser)
    } catch (error) {
      throw new InternalServerErrorException("TOHANDLE") //TODO: handle it!!!!
    }
  }
}