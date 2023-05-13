<div align = "center">

# Parse a Linked List From a String

</div>

<div align = "center">

<h3>Preloaded</h3>
<p>Preloaded for you is a class, struct or derived data type Node (depending on the language) used to construct linked lists in this Kata:</p>
<br>

</div>

<pre>
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
</pre>

<div align = "center">

<h3>Task</h3>
<br>
<h3>Create a function parse which accepts exactly one argument string / $string / s / strrep ( or similar, depending on the language ) which is a string representation of a linked list. Your function must return the corresponding linked list, constructed from instances of the Node class/struct/type. The string representation of a list has the following format: the value of the node, followed by a whitespace, an arrow and another whitespace (" -> "), followed by the rest of the linked list. Each string representation of a linked list will end in "null" / "NULL" / "nil" / "nullptr" / "null()" depending on the language you are undertaking this Kata in. For example, given the following string representation of a linked list:</h3>
<br>

<pre>"1 -> 2 -> 3 -> null"</pre>

<h3>... your function should return:</h3>
<br>

<pre>new Node(1, new Node(2, new Node(3)))</pre>

</div>
