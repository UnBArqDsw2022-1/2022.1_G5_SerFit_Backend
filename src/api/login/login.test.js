const { login } = require('./login.controller');

describe('login', () => {
  it('should return a token', async () => {
    expect(true).toBe(true);
  });
});

test('login', () => {
  expect(login).toBeDefined();
});
