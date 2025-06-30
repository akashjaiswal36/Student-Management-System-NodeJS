const request = require('supertest');
const app     = require('../src/app'); // Export app for tests if you prefer

describe('Student API', () => {

  it('POST /api/students → 201', async () => {
    await request(app)
      .post('/api/students')
      .send({ id: 1, name: 'Alice', course: 'Math' })
      .expect(201)
      .expect('Content-Type', /json/);
  });

  it('GET /api/students → array with Alice', async () => {
    const res = await request(app).get('/api/students').expect(200);
    expect(res.body.some(s => s.name === 'Alice')).toBeTruthy();
  });

  it('DELETE /api/students/1 → 200', async () => {
    await request(app).delete('/api/students/1').expect(200);
  });

});
