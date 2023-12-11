const { generateText, checkAndGenerate } = require('../js-testing-introduction/util');
// unit test
describe('generate text', () => {

    test('should output name and age', () => {
        const text = generateText('Korn', 30);
        expect(text).toBe('Korn (30 years old)');
        const text2 = generateText('Anna', 12);
        expect(text2).toBe('Anna (12 years old)');
    });

});
// integration test

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 33);
    expect(text).toBe('Max (33 years old)');
    
});