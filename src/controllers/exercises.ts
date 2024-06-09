import { Request, Response } from 'express';
import { multiplesOf3Or5 } from '../exercises/exercise1';

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
}
