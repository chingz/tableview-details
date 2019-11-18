import BaseApiService from '@client/services/base';
import Car from '@client/types/Car';

class CarsService extends BaseApiService {
  constructor() {
    super('/api/cars');
  }

  list = (): Promise<Car[]> => this.get('/list');

  byId = (id: string): Promise<Car> => this.get(`/${id}`);
}

export default new CarsService();
