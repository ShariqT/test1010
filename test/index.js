const { expect } = require('chai');
const cmd = require('../lib')


describe('the command', () => {
    it('adds numbers', () => {
        let result = cmd['add'](1, 2);
        expect(result).to.eql(3);
    })
    it('subtracts numbers', () => {
        let result = cmd['sub'](2,2);
        expect(result).to.eql(0);
    })
})