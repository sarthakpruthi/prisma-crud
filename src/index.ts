import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username:string, firstName:string,lastName:string,password:string){
    const res = await prisma.users.create({
        data:{
            username,
            firstName,
            lastName,
            password
        }
    });
    console.log(res);
}

async function updateUser(username:string, firstName:string, lastName:string){
    const res = await prisma.users.update({
        where:{username},
        data:{
            firstName,
            lastName
        }
    });
    console.log(res);
    
}

async function deleteUser(username:string){
    const res = await prisma.users.delete({
        where:{username}
    });
    console.log(res);
    
}

async function getUser(username:string){
    const res = await prisma.users.findFirst({
        where:{username}
    });
    console.log(res);
}

insertUser("sar123456","sarthak","pruthi","pruthi1234");

// updateUser("sar1234","pruthi","pruthi");

// deleteUser("sar1234");

getUser("sar123456");