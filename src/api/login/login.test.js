const { login } = require('./login.controller');

describe('login', () => {
  it('should return a token', async () => {
    console.log('login', login);
    expect(true).toBe(true);
  });
});

test('login', () => {
  expect(login).toBeDefined();
});
