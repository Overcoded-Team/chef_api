import { UserRole } from "@prisma/client";

export class ResponseChefDto {
    id: number;
    email:string;
    role: UserRole;
    chef: any; // TODO: FIX IT!
    createdAt: Date;
    updatedAt: Date;
}