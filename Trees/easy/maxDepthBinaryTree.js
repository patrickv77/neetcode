// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

// runtime 58ms -- beats 78.36%
// memory 44.88mb -- beats 79.96%
var maxDepth = function (root) {
  if (root === null) return 0;

  let countDepth = (root, count) => {
    if (root === null) return count;
    else {
      return Math.max(
        countDepth(root.left, count + 1),
        countDepth(root.right, count + 1)
      );
    }
  };

  return Math.max(countDepth(root.left, 1), countDepth(root.right, 1));
};

// let three = new TreeNode(3);
// let nine = new TreeNode(9);
// let twenty = new TreeNode(20);
// let fifteen = new TreeNode(15);
// let seven = new TreeNode(7);
// let eight = new TreeNode(8);

// three.left = nine;
// three.right = twenty;
// twenty.left = fifteen;
// twenty.right = seven;
// seven.left = eight;

console.log(maxDepth(null));
