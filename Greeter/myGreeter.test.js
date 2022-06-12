const Greeter = require('./Greeter');

describe('Greeter', () => {
  let uut;
  let date;
  let logger;

  beforeEach(() => {
    date = new Date();
    date.setHours(14);
    date.setMinutes(0);

    logger = {
      log: jest.fn()
    };

    uut = new Greeter(() => date.getTime(), logger);
  });

  it('says Hello and name', () => {
    expect(uut.greet('Daniel')).toEqual('Hello Daniel!');
    expect(uut.greet('Bob')).toEqual('Hello Bob!');
  });

  it('capitalizes name', () => {
    expect(uut.greet('daniel')).toEqual('Hello Daniel!');
  });

  it('trims the name', () => {
    expect(uut.greet('  daniel\t\n  ')).toEqual('Hello Daniel!');
  });
});
