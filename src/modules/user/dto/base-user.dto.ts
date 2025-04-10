import { UserRole } from "@prisma/client";

export class BaseUserDto {
  email:string;
  document: string;
  password: string;
  role: UserRole;
}