// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// runtime 80ms -- beats 6.46%
// memory 44.13mb -- beats 46.99%
var mergeTwoLists = function (list1, list2) {
  // base case, both empty lists
  if (list1 === null && list2 === null) return null;

  let mergedHead, mergedCurr;

  while (list1 || list2) {
    let l1val, l2val;
    if (list1) {
      l1val = list1.val;
    }

    if (list2) {
      l2val = list2.val;
    }

    let newNode;

    if (l1val > l2val || l1val === undefined) {
      newNode = new ListNode(l2val);
      list2 = list2.next;
    } else if (l1val < l2val || l2val === undefined) {
      newNode = new ListNode(l1val);
      list1 = list1.next;
    } else {
      // they are equal, for simplicity and cleanliness of the solution, we will only create one node here
      newNode = new ListNode(l1val);
      list1 = list1.next;
    }

    if (!mergedHead) {
      // handles the first node
      mergedHead = newNode;
      mergedCurr = mergedHead;
    } else {
      mergedCurr.next = newNode;
      mergedCurr = mergedCurr.next;
    }
  }

  return mergedHead;
};

// const five = new ListNode(5);
// const four = new ListNode(4, five);
// const three = new ListNode(3, four);
// const two = new ListNode(2, three);
// const one = new ListNode(1, two);

// const five1 = new ListNode(10);
// const four1 = new ListNode(9, five1);
// const three1 = new ListNode(8, four1);
// const two1 = new ListNode(7, three1);
// const one1 = new ListNode(6, two1);

// const one = new ListNode();
// const one1 = new ListNode();

// console.log(mergeTwoLists(one, one1));
