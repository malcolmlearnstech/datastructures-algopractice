# Lottery Ticket

<div align = "center">
  <h3>You are given an input of:
    
    (ticket, win)
  </h3>
  
  <h3> Your lottery ticket (<em>ticket</em>), represented by an array of 2-value arrays, you must find out if you've won the jackpot.  </h3>
  
  <h3>
    Example ticket: 
    </h3>
    
  <pre>  
   [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ] 
   </pre>
  
  <h3>
    To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. </h3>
  
  <h3>Note you can only have one mini win per sub array.</h3>
  
  <h3>Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.</h3>
  
  <h3>All inputs will be in the correct format. Strings on tickets are not always the same length.</h3>

</div>

<h3>Example 1:</h3>
<pre>
Input: ([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) 
</pre>

<p>
<em>As one of the characters in the first string of the first mini ticket matches the character code, but is the only match, there aren't enough mini wins to match the overall count needed on the input lottery ticket. This ticket will not win.
  
  <strong>The function will return 'Loser!'</strong>
    </em>
</p>

<h3>Example 2:</h3>
<pre>
Input: ([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1) 
</pre>

<p>
<em>As one of the characters in the first string of the first mini ticket matches the character code of the mini ticket, it will be a mini win. As the one mini ticket win will match the overall count needed on the input lottery ticket, this lottery ticket will win. 
  
  <strong>The function will return 'Winner!'</strong>
  </em>
</p>



