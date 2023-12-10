<div align = 'center'>

# Simple String Indices

</div>

<div align = 'center'>

<h3>In this Kata, you will be given a string with brackets and an index of an opening bracket and your task will be to return the index of the matching closing bracket. Both the input and returned index are 0-based except in Fortran where it is 1-based. An opening brace will always have a closing brace. Return <em>-1</em> if there is no answer (in Haskell, return <em>Nothing</em>; in Fortran, return <em>0</em>; in Go, return an error)</h3>

<h3>Input will consist of letters, numbers and special characters, but no spaces. The only brackets will be <em>(</em>&nbsp; and &nbsp;<em>)</em>.</h3>

<br>

<h3>Example 1:</h3>

<pre>function solve&nbsp;(&nbsp;"((1)23(45))(aB)", 0&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>10</em></strong></p>
<p><em>The opening brace at index 0 matches the closing brace at index 10</em></p>

<br>

<h3>Example 2:</h3>

<pre>function solve&nbsp;(&nbsp;"((1)23(45))(aB)", 2&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>-1</em></strong></p>
<p><em>There is no opening bracket at index 2, so return -1</em></p>

<br>

<h3>Example 3:</h3>

<pre>function solve&nbsp;(&nbsp;"((1)23(45))(aB)", 6&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>9</em></strong></p>

</div>
