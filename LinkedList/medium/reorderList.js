
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// runtime 472ms -- beats 5.04%
// memory 49.62mb -- beats 91.30%
var reorderList = function(head) {
  let left = head;

  while(left.next !== null && left.next.next !== null) {
    const temp = left.next;
    let curr = left;
    let prev = curr;

    while(curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    left.next = curr;
    curr.next = temp;

    left = temp;
  }
};

const printLinkedList = (head) => {
  let curr = head;
  while(curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

// const five = new ListNode(5);
// const four = new ListNode(4, five);
// const three = new ListNode(3, four);
// const two = new ListNode(2, three);
// const one = new ListNode(1, two);

// console.log(printLinkedList(one));
console.log(printLinkedList(reorderList(one)))