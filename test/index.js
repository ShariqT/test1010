const { expect } = require('chai');
const cmd = require('../lib')


describe('the command', () => {
    it('adds numbers', () => {
        let result = cmd(1, 2);
        expect(result).to.eql(3);
    })
})