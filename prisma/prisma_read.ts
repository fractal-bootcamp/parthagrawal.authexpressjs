import prisma from "./prismaclient";

async function FindAll() {

    const users = await prisma.user.findMany();
    console.log(users)

}

FindAll()

