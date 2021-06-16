const generateParenthesis = require('./generate-parenthesis')

generateParenthesis(1) // expected output = ()

generateParenthesis(2) // expected output = ()(), (())

generateParenthesis(3) // expected output = ()()(), (())(), ()(()), (()()), ((()))
