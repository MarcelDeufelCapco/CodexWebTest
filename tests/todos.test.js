const request = require('supertest');
const app = require('../src/index');

describe('todos', () => {
  it('lists todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
