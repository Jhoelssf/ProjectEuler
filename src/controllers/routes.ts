import { Router } from 'express';
import { ExercisesController } from './exercises';

export class ExercisesRoute {
  readonly router: Router;

  constructor(private readonly controller: ExercisesController) {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post(
      '/exercise1',
      this.controller.multiplesOf3Or5.bind(this.controller)
    );
  }
}

const controller = new ExercisesController();

export default new ExercisesRoute(controller).router;
