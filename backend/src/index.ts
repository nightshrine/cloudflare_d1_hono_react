import { Hono } from 'hono';
import { corsMiddleware } from './middleware/cors';

type Bindings = {
    DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', corsMiddleware('*'));

app.get('/', async (c) => {
    return c.json({ name: 'Hello, World!' });
});

export default app;
