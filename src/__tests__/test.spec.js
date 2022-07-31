const db = require('../config/database');

describe('env', () => {
  it('db should be defined', () => {
    expect(db).toBeDefined();
  });
});
