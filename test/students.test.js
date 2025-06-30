const request = require('supertest');
const app     = require('../src/app');
const model   = require('../src/models/student');

describe('Student API', () => {

  beforeEach(() => model.clear());

  it('POST /api/students → 201', async () => {
    await request(app)
      .post('/api/students')
      .send({ id: 1, name: 'Alice', course: 'Math' })
      .expect(201)
      .expect('Content-Type', /json/);
  });

  it('GET /api/students → array with Alice', async () => {
    model.add({ id: 1, name: 'Alice', course: 'Math' }); // seed manually
    const res = await request(app).get('/api/students').expect(200);
    expect(res.body.some(s => s.name === 'Alice')).toBeTruthy();
  });

  it('DELETE /api/students/1 → 200', async () => {
    model.add({ id: 1, name: 'Alice', course: 'Math' });
    await request(app).delete('/api/students/1').expect(200);
    expect(model.getAll().length).toBe(0); // optional assertion
  });

});
