import { Handler } from 'express';
import carDbService from '@server/services/carsDbService'

const handler: Handler = (_req, res) => {
  res.json(carDbService.getList());
}

export default handler;

