
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * Constraints:

  The number of the nodes in the list is in the range [0, 104].
  -105 <= Node.val <= 105
  pos is -1 or a valid index in the linked-list.
 */

// runtime 66ms -- beats 73.30%
// memory 44.56mb -- beats 87.51%
var hasCycle = function(head) {
  if(head === null) return false;

  let slow = head;
  let fast = head;
  while(fast.next !== null && fast.next.next !== null){
    fast = fast.next.next;
    slow = slow.next;
    if(slow === fast) return true;
  }
  return false;
};

// const five = new ListNode(5);
// const four = new ListNode(4, five);
// const three = new ListNode(3, four);
// const two = new ListNode(2, three);
const one = new ListNode(1);
one.next = one;

console.log(hasCycle(one));