const request = require('supertest');
const app = require('../../app');

// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//   });

describe('Placeholder', () => {
  it('should call placeholder without auth and get 401 with error message as No token provided.', async () => {
    const req = {};
    const res = await request(app).get("/placeholder/test");
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
    expect(res.body.auth).toBeFalsy();
    expect(res.body.message).toEqual("No token provided.");
  });
});