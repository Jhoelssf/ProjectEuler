import { Request, Response } from 'express';
import { multiplesOf3Or5 } from '../exercises/exercise1';
import { Exercise2 } from '../exercises/exercise2';

export class ExercisesController {
  constructor() {}

  multiplesOf3Or5(req: Request, res: Response) {
    const n = Number(req.body.n);

    const resp = multiplesOf3Or5(n);
    res.status(200).send({
      response: resp,
      error: null
    });
  }

  fibonacci(req: Request, res: Response) {
    const n = Number(req.body.n);

    const exercise2 = new Exercise2();

    const resp = exercise2.sumEvenFibonacci(n);
    res.status(200).send({
      response: resp,
      error: null
    });
  }
}
