const request = require('supertest');
const app = require('./app');

describe('GET /gfjsgk', () => {
  it('should respond with 404', async () => {
    const res = await request(app).get('/gfjsgk');

    expect(res.status).toEqual(404);
    expect(res.body.ok).toEqual(false);
  });
});
