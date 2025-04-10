import { ChefSpeciality } from "@prisma/client";
import { BaseUserDto } from "src/modules/user/dto/base-user.dto";

export class CreateChefDto extends BaseUserDto {
  firstName: string;
  lastName: string;
  bio?: string | null;
  profileImage?: string;
  specialty?: ChefSpeciality;
  experience?: number;
  phoneNumber?: string;
}