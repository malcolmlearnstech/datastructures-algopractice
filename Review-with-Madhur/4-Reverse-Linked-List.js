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
  let prev = null; // new data created - O(1)

  while (current !== null) {
    let tempNode = current.next; // new data created - O(1)
    current.next = prev;
    prev = current;
    current = tempNode;
  }
  return prev;
}

//Time Complexity : O(N) - time needed to complete function is dependent on length of input
//Space Complexity : O(1) + O(1) => O(2) => O(1) - two pieces of new data created but the size is constant regardless of the input
