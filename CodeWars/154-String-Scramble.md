<div align = 'center'>

# String Scramble

</div>

<div align = 'center'>

<h3>Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.</h3>

<h3>Ex:&nbsp;&nbsp;&nbsp;&nbsp;<em>scramble (&nbsp;'abcd', &nbsp;[0,3,1,2]&nbsp;) -> 'acdb'</em></h3>

<h3>The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corresponding numbers in the index array.</h3>

<h3>In other words, put the first character in the string at the index described by the first element of the array</h3>

<h4><sup>*</sup>You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).</h4>

<br>

<h3>Example 1:</h3>

<pre>function scramble(&nbsp;'abcd', [0,3,1,2]&nbsp;)</pre>

<p>The function should return the following string: &nbsp;<strong><em>"acdb"</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>function scramble(&nbsp;'sc301s', [4,0,3,1,5,2]&nbsp;)</pre>

<p>The function should return the following string: &nbsp;<strong><em>"c0s3s1"</em></strong></p>

<br>

<h3>Example 3:</h3>

<pre>function scramble(&nbsp;'bskl5', [2,1,4,3,0]&nbsp;)</pre>

<p>The function should return the following string: &nbsp;<strong><em>"5sblk"</em></strong></p>

</div>
