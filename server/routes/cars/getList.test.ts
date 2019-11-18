import request from 'supertest';
import app from '@server/app';

describe('car list', () => {
  test('only visible cars', async () => {
    const res = await request(app).get('/api/cars/list');
    const cars: { visible: boolean }[] = res.body;
    const onlyVisible = cars.every(car => car.visible);
    expect(onlyVisible).toBe(true);
  });
})
