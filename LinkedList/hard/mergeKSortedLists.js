// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// runtime 396ms -- beats 18.89%
// memory 74.53mb -- beats 5.03%
var mergeKLists = function (lists) {
  let resHead = null,
    resCurr = null;

  while (lists.length !== 0) {
    let min = Infinity;
    let minIndex = 0;

    for (let i = 0; i < lists.length; i++) {
      if (lists[i] === null) {
        // if a list is empty, remove that list decrement i
        lists = [...lists.slice(0, i), ...lists.slice(i + 1)];
        // console.log(lists);
        i--;
      } else {
        if (lists[i].val <= min) {
          min = lists[i].val;
          minIndex = i;
        }
      }
    }

    if (lists.length !== 0) {
      lists[minIndex] = lists[minIndex].next;

      let newNode = new ListNode(min);
      // console.log('adding node', newNode.val);

      if (!resHead) {
        resHead = newNode;
        resCurr = resHead;
      } else {
        resCurr.next = newNode;
        resCurr = resCurr.next;
      }
    }
  }

  return resHead;
};

// const five = new ListNode(5);
// const four = new ListNode(4, five);
// const one = new ListNode(1, four);

// const four1 = new ListNode(4);
// const three1 = new ListNode(3, four1);
// const one1 = new ListNode(1, three1);

// const six2 = new ListNode(6);
// const two2 = new ListNode(2, six2);

// console.log(mergeKLists([one, one1, two2]));

// const printLL = (head) => {
//   while (head) {
//     console.log(head.val);
//     head = head.next;
//   }
// };

// printLL(mergeKLists([one, one1, two2]));
