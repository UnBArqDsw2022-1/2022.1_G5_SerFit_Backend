const request = require('supertest');
const jwt = require('jsonwebtoken');
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
    const res = await request(app).post("/placeholder/test").set({});
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
    expect(res.body.auth).toBeFalsy();
    expect(res.body.message).toEqual("No token provided.");
  });
  it('should call test and get 200', async () => {
    const mockedToken = jwt.sign('1', process.env.SECRET);
    const commonHeaders = {
      'x-access-token': mockedToken
    };
    const res = await request(app).get("/api/placeholder/test").set(commonHeaders);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Login successful");
  });
  
});