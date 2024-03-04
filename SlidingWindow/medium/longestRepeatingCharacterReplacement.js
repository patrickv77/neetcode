/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * Constraints:
 * 1 <= s.length <= 105
 * s consists of only uppercase English letters.
 * 0 <= k <= s.length
 * 
 */
var characterReplacement = function(s, k) {
    // start with two pointers
    // use an object to track the count of letters

    // loop through s, add the characters to the object and track the count of each
    // track the most used letter and measure that against all other letters (should equal k);
    // if right index minus left index plus 1 minus most used letter is greater than k, slide the window
    // decrement from the dictionary and increment the left pointer

    // return the length of the sliding window r minus l
};