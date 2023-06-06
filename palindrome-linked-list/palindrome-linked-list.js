/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    
    let low = 0;
    let hi = arr.length - 1;
    const mid = Math.floor((hi + 1) / 2);
    for (; low < mid; low++) {
        if (arr[low] !== arr[hi]) {
            return false;
        }
        hi--;
    }
    return true;
};