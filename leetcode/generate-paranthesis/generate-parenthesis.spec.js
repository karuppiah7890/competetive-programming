const generateParenthesis = require('./generate-parenthesis')

describe('Generate Parenthesis', () => {
    it('n = 1', () => {
        expect(generateParenthesis(1)).toStrictEqual(["()"])
    })
    

    it('n = 2', () => {
        generateParenthesis(2) // expected output = ()(), (())
    })

    it('n = 3', () => {
        generateParenthesis(3) // expected output = ()()(), (())(), ()(()), (()()), ((()))
    })
})