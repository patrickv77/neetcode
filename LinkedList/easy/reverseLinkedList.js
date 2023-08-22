// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// runtime 63ms -- beats 41.67%
// memory 43.29mb -- beats 99.18%
var reverseList = function (head) {
  if (!head) return null;

  let prev = null;
  let curr = head;
  let next = curr.next;

  while (next) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next.next;
  }

  curr.next = prev;
  return curr;
};

// const five = new ListNode(5);
// const four = new ListNode(4, five);
// const three = new ListNode(3, four);
// const two = new ListNode(2, three);
// const one = new ListNode(1, two);

// console.log(reverseList(one));
