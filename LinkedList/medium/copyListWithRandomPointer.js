/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 * 
 * Constraints:
 * 0 <= n <= 1000
 * -104 <= Node.val <= 104
 * Node.random is null or is pointing to some node in the linked list.
 * 
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  // traverse the list twice

  // first pass, create new nodes using the current node's value and place in a hashmap

  // second pass, map the next and random values of each node

  // return new head
};