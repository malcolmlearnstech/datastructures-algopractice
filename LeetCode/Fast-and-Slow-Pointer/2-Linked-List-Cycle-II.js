class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var detectCycle = function (head) {
  let slow = head;
  let nodeObject = {};

  while (slow !== null && slow.next !== null) {
    if (!nodeObject[slow]) {
      nodeObject[slow] = 1;
    } else {
      return slow;
    }
    slow = slow.next;
  }
  return null;
};
