const db = require('../config/database');

describe('env', () => {
  it('db should be defined', () => {
    console.log('db', db);
    expect(db).toBeDefined();
  });
});
