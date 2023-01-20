# Lottery Ticket

<div align = "center">
  
  <h3> Given a lottery ticket (<em>ticket</em>), represented by an array of 2-value arrays, you must find out if you've won the jackpot.  </h3>
  
  <h3>
    Example ticket: 
    </h3>
    
  <pre>  
   [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ] 
   </pre>
  
  <h3>
    To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.</h3>
  
  <h3>Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.</h3>
  
  <h3>All inputs will be in the correct format. Strings on tickets are not always the same length.</h3>

</div>

<h3>Example 1:</h3>
<pre>
Input: ([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) 
</pre>

<p>
<em>As both elements in the array are odd, they are simply rearranged in ascending order.
  
  <strong>The function will return 'Loser!'</strong>
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



