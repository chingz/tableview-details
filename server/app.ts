import path from 'path';
import express, { Application } from 'express';

import dev from '@server/middleware/dev';
import carsRouter from '@server/routes/cars';

const staticDir = path.resolve(__dirname, '..', 'dist');
const indexHtml = path.resolve(staticDir, 'index.html');
const app: Application = express();

app.use(dev()); 
app.use('/static', express.static(staticDir));
app.use('/api/cars', carsRouter);
app.use('/', (_, res) => res.sendFile(indexHtml));
app.use('*', (_, res) => res.redirect('/'));

export default app;
