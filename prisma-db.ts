import { PrismaClient } from "@prisma/client";

let payload:object = { log: ['info'] }; // Adjust based on environment if needed
const prismaDb = new PrismaClient(payload);

export { prismaDb };
