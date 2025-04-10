import { BadRequestException, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { CreateChefDto } from "../dto/chef/create-chef.dto";
import { chefRepository } from "../repositories/chef.repository";

@Injectable()
export class UserFactory {
  constructor(
    private readonly chefRepository: chefRepository
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const SALTROUNDS = parseInt(process.env.SALTS || "10");
    const SALT = await bcrypt.genSalt(SALTROUNDS)
    return bcrypt.hash(password, SALT)  
  }

  async handleFactory(
    data: CreateChefDto
  ){
    switch(data.role){
      case "CHEF": 
        return this.createChef(data);
      default:
        throw new BadRequestException("role not especified");
    }
  }

  async createChef(createChefDto: CreateChefDto){
    const HASHEDPASS = await this.hashPassword(createChefDto.password);
    createChefDto.password = HASHEDPASS;
    return await this.chefRepository.create(createChefDto);
  }

}