function parse(string) {
  if (string === 'null') return null;

  string = string.split(' -> ').map((element) => Number(element));

  let headNode = new Node(string[0]);
  let current = headNode;

  for (let i = 1; i < string.length - 1; i++) {
    current.next = new Node(string[i]);
    current = current.next;
  }
  return headNode;
}
