import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'SaaS Starter Kit',
        description: 'Complete Next.js boilerplate with authentication, payments, and dashboard.',
        price: 99,
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        category: 'saas-kit',
        stock: 10,
      },
      {
        name: 'AI Website Template',
        description: 'Modern AI-powered website template with advanced features.',
        price: 299,
        imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
        category: 'templates',
        stock: 5,
      },
      {
        name: 'Bot Workflow System',
        description: 'Intelligent automation workflow for modern businesses.',
        price: 199,
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
        category: 'ai-tools',
        stock: 8,
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  }); 