const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../../app');
const AccountType = require('../../utils/AccountType');

describe('User', () => {
  it('should call test and get 200', async () => {
    const mockRequest = {
      password: '1234567890123456789',
      email: 'test@test.com',
      name: 'Foo Bar',
      accountType: AccountType.client,
    };
    const mockedToken = jwt.sign('1', process.env.SECRET);
    const commonHeaders = {
      'x-access-token': mockedToken,
    };
    await request(app)
      .post('/api/user/create')
      .set(commonHeaders)
      .send(mockRequest)
      .expect(201)
      .expect((res) => {
        res.auth = true;
        res.token !== undefined;
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Login successful');
  });
});
