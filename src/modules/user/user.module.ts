import { Module } from "@nestjs/common";
import { PrismaModule } from "src/common/prisma.module";
import { UserController } from "./user.controller";
import { PrismaService } from "src/common/prisma.service";
import { UserService } from "./user.service";
import { UserFactory } from "./factory/user.factory";
import { chefRepository } from "./repositories/chef.repository";

@Module({
  exports: [],
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [PrismaService, UserService, UserFactory, chefRepository]
})
export class UserModule{}