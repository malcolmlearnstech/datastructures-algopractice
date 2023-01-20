# Lottery Ticket

<div align = "center">
  
  <h3> Given a lottery ticket (<em>ticket</em>), represented by an array of 2-value arrays, you must find out if you've won the jackpot.  
  
    <div align = "left>Example ticket: </div>
    
  
     [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ] 
  
  To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.</h3>

</div>

<h3>Example 1:</h3>
<pre>
Input: [7, 1] 
</pre>

<p>
<em>As both elements in the array are odd, they are simply rearranged in ascending order.
  
  <strong>The function will return [1, 7]</strong>
    </em>
</p>

<h3>Example 2:</h3>
<pre>
Input: [5, 8, 6, 3, 4] 
</pre>

<p>
<em>Given the rules from the prompt, the numbers 8, 6, and 4 will remain in the same place. 
The positions of 5 and 3 will swap due to the ascending order rule of the prompt. 
  
  <strong>The function will return [3, 8, 6, 5, 4]</strong>
  </em>
</p>


<h3>Example 3:</h3>
<pre>
Input: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
</pre>

<p>
<em>Given the rules from the prompt, the numbers 8, 6, 4, 2, and 0 will remain in their positions.
The positions of 9, 7, 5, 3, and 1 will have to be swapped and placed in ascending order due to the prompt.

<strong>The function will return [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]</strong></em>

</p>
