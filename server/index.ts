import express, { Express } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';
import * as socketio from 'socket.io';
import { buildRoutes } from './routes';
import cors from 'cors'

const port = parseInt(process.env.PORT!, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

export const io: socketio.Server = new socketio.Server();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

nextApp.prepare().then(() => {
  const app: Express = express();
  const server: http.Server = http.createServer(app);

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors(corsOptions));

  io.attach(server);
  io.on('connection', (socket: socketio.Socket) => {
    console.info('connection');

    socket.on('disconnect', () => {
      console.info('client disconnected');
    })
  });

  buildRoutes(app);

  app.all('*', async (req: any, res: any) => {
    nextHandler(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});