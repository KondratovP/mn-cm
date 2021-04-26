import express, { Express, Request, Response } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';
import * as socketio from 'socket.io';
import { buildRoutes } from './routes';

const port = parseInt(process.env.PORT!, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

export const io: socketio.Server = new socketio.Server();

nextApp.prepare().then(() => {
  const app: Express = express();
  const server: http.Server = http.createServer(app);

  app.get('/hello', async (_: Request, res: Response) => {
    return res.json({hello: 'hello'})
  })

  io.attach(server);

  buildRoutes(app);

  io.on('connection', (socket: socketio.Socket) => {
    console.log('connection');

    socket.on('disconnect', () => {
      console.log('client disconnected');
    })
  });

  app.all('*', (req: any, res: any) => nextHandler(req, res));

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});