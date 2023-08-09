// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 * Constraints:

  The number of nodes in the list is sz.
  1 <= sz <= 30
  0 <= Node.val <= 100
  1 <= n <= sz

 */
var removeNthFromEnd = function (head, n) {
  let listSize = linkedListSize(head);
  // if listSize === n, remove first element
  if (listSize === n) {
    return head.next;
  } else {
    // move to node one before node to remove
    let curr = head;
    while (listSize - n - 1 !== 0) {
      curr = curr.next;
      listSize--;
    }
    curr.next = curr.next.next;

    return head;
  }
};

var linkedListSize = function (head) {
  let size = 1;
  let curr = head;
  while (curr.next != null) {
    curr = curr.next;
    size++;
  }
  return size;
};

const five = new ListNode(5);
const four = new ListNode(4, five);
const three = new ListNode(3, four);
const two = new ListNode(2, three);
const one = new ListNode(1, two);

console.log(one.val);
console.log(one.next.val);
console.log(one.next.next.val);
console.log(one.next.next.next.val);
console.log(one.next.next.next.next.val);

const newLL = removeNthFromEnd(one, 5);

console.log(newLL.val);
console.log(newLL.next.val);
console.log(newLL.next.next.val);
console.log(newLL.next.next.next.val);
console.log(newLL.next.next.next.next);
