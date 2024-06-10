import prisma from "./prismaclient";

async function CreateInitial() {

    const user = await prisma.user.create({
        data: {
            id: 1,
            email: "parth@yahoo.com",
            password: "cool"
        },
    }
    )
    console.log(user)

}

CreateInitial()

