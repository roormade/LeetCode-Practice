/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    
    const dCopy = new Map();
    let node = head;
    while (node) {
        dCopy.set(node, new Node(node.val));
        node = node.next;
    }
    
    node = head;
    while (node) {
        const dNode = dCopy.get(node);
        dNode.next = dCopy.get(node.next) || null;
        dNode.random = dCopy.get(node.random) || null;
        node = node.next;
    }
    
    return dCopy.get(head);
};