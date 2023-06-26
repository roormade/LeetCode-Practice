/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function isMirror(lVals, rVals) {
        if (lVals === null && rVals === null) {
            return true;
        }
        if (lVals === null || rVals === null) {
            return false;
        }
        if (lVals.val !== rVals.val) {
            return false;
        }
        return isMirror(lVals.left, rVals.right) && isMirror(lVals.right, rVals.left);
    }
    
    if (root === null) {
        return true;
    }
    return isMirror(root.left, root.right);
};