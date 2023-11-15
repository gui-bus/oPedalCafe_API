"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const client_1 = require("@prisma/client");
let prisma;
if (process.env.NODE_ENV === "production") {
    prisma = new client_1.PrismaClient();
}
else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new client_1.PrismaClient();
    }
    prisma = global.cachedPrisma;
}
exports.prismaClient = prisma;
