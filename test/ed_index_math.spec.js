const {sum_slojenie, allUpper, validateValue} = require('../js_education/index');
const expect = require('chai').expect;


describe('SUM', () => {

    it('calc sum with positive numbers', () => {
        expect(sum_slojenie(5, 7)).equal(12);
    });


    it('calc sum with negative numbers', () => {
        expect(sum_slojenie(-1, -2)).equal(-3);
    });

});


describe('ALL UPPER', () => {

    it('input all lower cases', () => {
        expect(allUpper(['a', 'bb', 'ccc'])).eql(['A', 'BB', 'CCC']);
    });


    it('input all upper cases', () => {
        expect(allUpper(['A', 'BB', 'CCC'])).eql(['A', 'BB', 'CCC']);
    });

    it('input some upper cases', () => {
        expect(allUpper(['A', 'bb', 'CcC'])).eql(['A', 'BB', 'CCC']);
    });

});


describe('validator value', () => {

    it('validate positive integer', () => {
        expect(validateValue(5)).equal(true);
    });

    it('validate positive integer', () => {
        expect(validateValue(1)).equal(true);
    });

    it('validate positive integer', () => {
        expect(validateValue(99)).equal(true);
    });

    it('validate boundary integer', () => {
        expect(validateValue(0)).equal(true);
    });
    
    it('validate boundary integer', () => {
        expect(validateValue(100)).equal(true);
    });

    it('validate boundary integer with decimals', () => {
        expect(validateValue(99.9)).equal(true);
    });

    it('validate boundary integer with decimals', () => {
        expect(validateValue(0.1)).equal(true);
    });

    it('validate negative integer', () => {
        expect(validateValue(-1)).equal(false);
    });

    it('validate negative integer', () => {
        expect(validateValue(101)).equal(false);
    });

    it('validate not integer', () => {
        expect(validateValue('abc')).equal(true);
    });



});