import chai from 'chai';
import {getSum, getMax} from './script';

chai.should();

describe('test code', function() {
    it('getSum', function() {
        getSum(1, 2, 3, 4, 5).should.equal(15);
        getSum(1, 2, 3, 4, 5, 6).should.equal(21);
        getSum(1).should.equal(1);
        getSum().should.equal(0);
    });

    it('getMax', function() {
        getMax(1, 2, 3, 4, 5).should.equal(5)
    });
});