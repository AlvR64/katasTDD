const Doors = require('./my100Doors');

describe('100Doors', () => {

    var door= new Doors();

    it('first pass, all doors', () => {
        expect(door.Pass(1)).toEqual("@".repeat(100));
    });

    it('second pass, multiple of 2 doors', () => {
        expect(door.Pass(2)).toEqual("#".repeat(50));
    });

    it('third pass, multiple of 3 doors', () => {
        expect(door.Pass(3)).toEqual("@#".repeat(25));
    });
});