# Sum of Digits

<div align = "center">
  
<h3> Digital root is the recursive sum of all the digits in a number. </h3>
<h3>Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.</h3>

</div>

<h3>Example 1:</h3>
<pre>
16  -->  1 + 6 = 7. 
</pre>

<p>
<em>When the number 16 is separated, it splits its digits into 1 and 6. When those are added, we receive 7. 
  
  <strong>Our function will return 7.</strong>
    </em>
</p>

<h3>Example 2:</h3>
<pre>
942  -->  9 + 4 + 2 = 15 (still has two digits so we split again) -->  1 + 5 = 6. Function will return 
</pre>

<p>
<em>When the number 942 is separated, it splits its digits into 9, 4, and 2. When those are added, we receive 15. Since 15 still has two digits, we split again in 1 & 5. After adding 1 & 5, we receive 6. The function will return 6.</em>
</p>

<h3>Example 3:</h3>
<pre>
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
</pre>

<p>
<em>When the number 132189 is separated, it splits its digits in 1, 3, 2, 1, 8 and 9. When those are added, we receive 24. Since 24 still has two digits, we split again into 2 & 4. After adding 2 & 4, we receive 6. The function will return 6.</em>
</p>
