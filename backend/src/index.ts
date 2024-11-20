import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';
import { corsMiddleware } from './middleware/cors';

type Bindings = {
    DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', corsMiddleware('*'));

app.get('/', async (c) => {
    const adapter = new PrismaD1(c.env.DB);
    const prisma = new PrismaClient({ adapter });

    const sample = await prisma.sample.findFirst();
    return c.json(sample);
});

export default app;
