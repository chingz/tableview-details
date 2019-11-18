import request from 'supertest';
import app from '@server/app';

describe('car detail', () => {
  test('status 200 on existing car', async () => {
    const res = await request(app).get('/api/cars/195');
    expect(res.status).toEqual(200);
  });

  test('status 404 on non existing car', async () => {
    const res = await request(app).get('/api/cars/0');
    expect(res.status).toEqual(404);
  });

  test('valid car object', async () => {
    const { body } = await request(app).get('/api/cars/195');
    expect(body.id).not.toBeUndefined();
    expect(body.pricing).not.toBeUndefined();
    expect(body.car).not.toBeUndefined();
    expect(body.conditions).not.toBeUndefined();
  });
})
