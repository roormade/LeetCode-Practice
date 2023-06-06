/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let rev = null;
    let current = head;
    
    while (current !== null) {
        const rNext = current.next;
        current.next = rev;
        rev = current;
        current = rNext;
    }
    return rev;
};