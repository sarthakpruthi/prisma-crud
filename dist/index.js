"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.create({
            data: {
                username,
                firstName,
                lastName,
                password
            }
        });
        console.log(res);
    });
}
function updateUser(username, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.update({
            where: { username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
function deleteUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.delete({
            where: { username }
        });
        console.log(res);
    });
}
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.users.findFirst({
            where: { username }
        });
        console.log(res);
    });
}
insertUser("sar123456", "sarthak", "pruthi", "pruthi1234");
// updateUser("sar1234","pruthi","pruthi");
// deleteUser("sar1234");
getUser("sar123456");
