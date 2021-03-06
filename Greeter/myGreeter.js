const _ = require('lodash');

class Greeter {
  constructor(getCurrentTimeMillisFn, logger) {
    this.getCurrentTimeMillisFn = getCurrentTimeMillisFn;
    this.logger = logger;
  }

  greet(name) {
    const theName = _.capitalize(_.trim(name));

    const currentTime = new Date(this.getCurrentTimeMillisFn());
    const hourOfDay = currentTime.getHours();

    this.logger.log(`greeted ${theName}`);
    const greeting = this._getGreeting(hourOfDay);

    return `${greeting} ${theName}!`;
  }

}

module.exports = Greeter;
