import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API is running' });
});

// Remove or comment out all product and blogPost endpoints, as those models no longer exist in the schema

// User endpoints
app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const { clerkId, username, name, email, image, bio, location, website } = req.body;
  // Upsert user: create if not exists, update if exists
  const user = await prisma.user.upsert({
    where: { clerkId },
    update: { username, name, email, image, bio, location, website },
    create: { clerkId, username, name, email, image, bio, location, website },
  });
  res.json(user);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
}); 