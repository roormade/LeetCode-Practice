/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    
    const rVal = preorder[0];
    const root = new TreeNode(rVal);
    const rInd = inorder.indexOf(rVal);
    
    const leftIn = inorder.slice(0, rInd);
    const rightIn = inorder.slice(rInd + 1);
    const leftPre = preorder.slice(1, 1 + leftIn.length);
    const rightPre = preorder.slice(1 + leftIn.length);
    
    root.left = buildTree(leftPre, leftIn);
    root.right = buildTree(rightPre, rightIn);
    return root;
};