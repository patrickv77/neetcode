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
  // base case, empty list
  if(!head) return null;

  // traverse the list twice
  // first pass, create new nodes using the current node's value and place in a hashmap
  const listNodeMap = new Map();

  let curr = head;
  while(curr) {
    listNodeMap.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  // second pass, map the next and random values of each node
  curr = head;
  while(curr) {
    listNodeMap.get(curr).next = listNodeMap.get(curr.next) || null;
    listNodeMap.get(curr).random = listNodeMap.get(curr.random) || null;
    curr = curr.next;
  }

  // return new head
  return listNodeMap.get(head);
};

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

let n1 = new Node(1);
let n2 = new Node(2, null);
n1.next = n2;
n1.random = n2;
n2.random = n2;

console.log(copyRandomList(n1))
