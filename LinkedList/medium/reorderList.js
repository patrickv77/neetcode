
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

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

