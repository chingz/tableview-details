import { Handler } from 'express';
import carDbService from '@server/services/carsDbService'

const handler: Handler = (req, res) => {
  const car = carDbService.getById(req.params.id);
  if (car) res.status(200).json(car);
  else res.status(404).end();
}

export default handler;
