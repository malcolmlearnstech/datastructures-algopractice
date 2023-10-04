<div align = "center">

# Highest Scoring Word
  </div>

<div align = "center">
  
<h3> Given a string of words, you need to find the highest scoring word. </h3>
<h3>Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
<em>For example, the score for the string 'abad' is 8 (1 + 2 + 1 + 4).</em>
</h3>
<h3>You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.</h3>

</div>

<h3>Example 1:</h3>
<pre>
Input: 'man i need a taxi up to ubud' 
</pre>

<p>
<em>The string 'taxi' has a score of 54 (t = 20, a = 1, x = 24, i = 9)
  
  <strong>The function will return 'taxi'</strong>
    </em>
</p>

<h3>Example 2:</h3>
<pre>
Input: 'b aa' 
</pre>

<p>
<em>Although both words have a score of 2 ('b' = 2 and 'aa' = 1 + 1), 'b' comes first in the string so this will return first. 
  
  <strong>The function will return 'b'</strong>
  </em>
</p>

<!-- <h3>Example 3:</h3>
<pre>
132189  >  1 + 3 + 2 + 1 + 8 + 9 = 24  >  2 + 4 = 6
</pre>

<p>
<em>When the number 132189 is separated, it splits its digits in 1, 3, 2, 1, 8 and 9. When those are added, we receive 24.

  Since 24 still has two digits, we split again into 2 & 4. (After adding 2 & 4, we receive 6)

  <strong>The function will return 6.</strong></em>
</p>

-->
