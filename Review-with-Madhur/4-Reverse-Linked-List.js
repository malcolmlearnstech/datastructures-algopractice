class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function generateList(array) {
  if (array.length === 0) return null;

  let head = new ListNode(array[0]);

  let current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = new ListNode(array[i]);
    current = current.next;
  }
  return head;
}

let array = [1, 5, 7, 10];
let linkedList = generateList(array);

function reverse(current) {
  let prev = null;

  while (current !== null) {
    let tempNode = current.next;
    current.next = prev;
    prev = current;
    current = tempNode;
  }
  return prev;
}
