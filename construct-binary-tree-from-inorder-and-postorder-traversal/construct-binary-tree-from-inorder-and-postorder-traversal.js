/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }
    
    const rVal = postorder[postorder.length - 1];
    const root = new TreeNode(rVal);
    const rInd = inorder.indexOf(rVal);
    
    const leftIn = inorder.slice(0, rInd);
    const rightIn = inorder.slice(rInd + 1);
    const leftPost = postorder.slice(0, leftIn.length);
    const rightPost = postorder.slice(leftIn.length, postorder.length - 1);
    
    root.left = buildTree(leftIn, leftPost);
    root.right = buildTree(rightIn, rightPost);
    return root;
};