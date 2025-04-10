import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "src/common/prisma.service";
import { CreateChefDto } from "../dto/chef/create-chef.dto";
import { ResponseChefDto } from "../dto/chef/response-chef.dto";

@Injectable()
export class chefRepository{
  constructor(private readonly prisma: PrismaService){}

  async create(createChefDto: CreateChefDto): Promise<ResponseChefDto>{
    try {
      const chef = await this.prisma.user.create({
        data: {
          email: createChefDto.email,
          document: createChefDto.document,
          password: createChefDto.password,
          role: createChefDto.role,
          chef: {
            create: {
              firstName: createChefDto.firstName,
              lastName: createChefDto.lastName,
              bio: createChefDto.bio,
              profileImage: createChefDto.profileImage,
              speciality: createChefDto.specialty,
              phoneNumber: createChefDto.phoneNumber,
            }
          },
        },
        select: {
          id: true,
          email: true,
          role: true,
          chef: {
            select: {
              firstName: true,
              lastName: true,
            }
          },
          createdAt: true,
          updatedAt: true,
        }
      });
      return chef;
    } catch (error) {
      throw new InternalServerErrorException("TOHANDLE") //TODO: to handle!
    }
  }
}