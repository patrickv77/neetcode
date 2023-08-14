
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *  
 * Constraints:

  The number of nodes in each linked list is in the range [1, 100].
  0 <= Node.val <= 9
  It is guaranteed that the list represents a number that does not have leading zeros.
 */

// runtime 95ms -- beats 69.06%
// memory 47.50mb -- beats 49.98%
var addTwoNumbers = function(l1, l2) {
  let l1Curr = l1;
  let l2Curr = l2;
  let l1Val, l2Val, res, resCurr;
  let carryOver = false;

  while(l1Curr !== null || l2Curr !== null || carryOver) {
    if(l1Curr !== null) {
      l1Val = l1Curr.val;
      l1Curr = l1Curr.next;
    }else{
      // set val to 0 in case either list is longer than the other
      l1Val = 0;
    }

    if(l2Curr !== null) {
      l2Val = l2Curr.val;
      l2Curr = l2Curr.next;
    }else{
      l2Val = 0;
    }

    let total = (carryOver) ? l1Val + l2Val + 1 : l1Val + l2Val;
    // console.log(total);
    let newNode;
    if(total >= 10) {
      //total 10-19
      newNode = new ListNode(total - 10);
      console.log('if', newNode.val);
      carryOver = true;
    }else{
      //total 0-9
      newNode = new ListNode(total);
      console.log('else', newNode.val);
      carryOver = false;
    }
    
    //handle first node
    if(res === undefined) {
      res = newNode;
      resCurr = res;
    }else {
      resCurr.next = newNode;
      resCurr = resCurr.next;
    }
  }

  return res;
};

// const five = new ListNode(5);
// const four = new ListNode(5, five);
// const three = new ListNode(5, four);
// const two = new ListNode(5, three);
// const one = new ListNode(5, two);

// addTwoNumbers(one,one);

//1117/1568 passed

/*
l1 = [1,8]
l2 = [0]

output [1]
expected [1,8]
*/

// const l1B = new ListNode(8);
// const l1 = new ListNode(1, l1B);

// const l2 = new ListNode(0);

// addTwoNumbers(l1,l2);