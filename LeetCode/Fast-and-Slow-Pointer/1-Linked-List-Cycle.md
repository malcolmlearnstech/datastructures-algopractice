<div align = "center">

# Linked List Cycle (LeetCode #141)

</div>

<div align = "center">

<h3>Given head, the head of a linked list, determine if the linked list has a cycle in it.</h3>
<br>
<h3>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, "pos" is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. <strong>Note that "pos" is not passed as a parameter.</strong></h3>
<br>

<h3>Example 1:</h3>
<br>
<img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png">
<pre>Input: Input: head = [3, 2, 0, -4]

(pos = 1, <em>tail connects to node at index 1</em>)</pre>

<p>would return: <strong>true</strong></p>
<p><em>There is a cycle in the linked list, where the tail connects to the index-1 node (0-indexed).</em></p>
<br>

<h3>Example 2:</h3>
<br>
<img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png">
<pre>Input: Input: head = [1, 2]

(pos = 0, <em>tail connects to node at index 0</em>)</pre>

<p>would return: <strong>true</strong></p>
<p><em>There is a cycle in the linked list, where the tail connects to the index-0 node (0-indexed).</em></p>
<br>

<h3>Example 3:</h3>
<br>
<img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png">
<pre>Input: Input: head = [1]

(pos = -1, <em>because there is only one node, the tail is also the head node.</em>)</pre>

<p>would return: <strong>false</strong></p>
<p><em>There is no cycle in the linked list.</em></p>

</div>
