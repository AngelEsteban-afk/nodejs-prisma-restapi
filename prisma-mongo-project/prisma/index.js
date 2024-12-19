const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Crea un nuevo usuario
  const newUser = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
  });
  console.log("Usuario creado:", newUser);

  // Obtén todos los usuarios
  const allUsers = await prisma.user.findMany();
  console.log("Usuarios en la base de datos:", allUsers);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
