// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let resHead, resCurr;
  let min = Infinity
  let minIndex = 0;

  while(lists){
    for(let i = 0; i < lists.length; i++) {
      if(lists[i] === null) {
        // if a list is empty, remove that list decrement i
        lists = [...lists.slice(0,i), ...lists.slice(i+1)];
        i--;
      }else{
        if(lists[i].val <= min){
          min = lists[i].val;
          minIndex = i;
        }
      }
    }

    let moveNode = lists[minIndex];
    moveNode = moveNode.next;

    let newNode = new ListNode(min);
    console.log('adding node', newNode.val);

    if(!resHead) {
      resHead = newNode;
      resCurr = resHead;
    } else {
      resCurr.next = newNode;
      resCurr = resCurr.next;
    }
  }

  return resHead;
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

// console.log(mergeTwoLists(one1, one));