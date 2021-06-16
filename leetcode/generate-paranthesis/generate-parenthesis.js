/**
 * @param {string} seed
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesisWithSeed = function(seed, n) {
    // count ( and ) characters
    // add ) and/ ( character only if max limit of n characters for each is not reached
    // add the ) only if it makes a match with an opening ( or else don't add it if there are already all paired parenthesis in the seed
    // once done adding, call generateParenthesisWithSeed again recursively with the new seed with same n though
    // base case for stopping recursion is when the seed value size reaches n characters, that's length of seed = n
}

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    if (n === 1) {
        return ["()"]
    }
    return generateParenthesisWithSeed("(", n)
};

module.exports = generateParenthesis;
