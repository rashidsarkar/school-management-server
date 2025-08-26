import { PrismaClient } from "@prisma/client";
import { Role } from "../../../generated/prisma";
import prisma from "../../shared/prisma";

const createStudent = async (data: any) => {
  const userData = {
    name: data.name,
    email: data.email,
    password: data.password,
    role: Role.STUDENT,
  };
  const createStudent = await prisma.user.create({
    data: userData,
  });
};

export const userService = { createStudent };
1;
