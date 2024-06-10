import express, { Application, NextFunction, Request, Response } from 'express';
import ExercisesRoute from './controllers/routes';

class App {
  expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.expressApp.use(express.json());
    this.mountRoutes();
    this.mountErrorHandlers();
  }

  mountRoutes() {
    this.expressApp.use('/exercises', ExercisesRoute);
  }

  mountErrorHandlers() {
    this.expressApp.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).send('Path not found');
    });
  }
}

export default new App().expressApp;
