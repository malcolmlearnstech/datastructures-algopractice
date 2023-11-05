<div align = 'center'>

# Double Trouble

</div>

<div align = 'center'>

<h3>Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.</h3>

<em>
<h4>x = [&nbsp;1, 2, 3, 4, 5&nbsp;] &nbsp; t = 3</h4>
<h4>1+2 = t, so remove 2. &nbsp;&nbsp; No other pairs = t, so rest of array remains:&nbsp;[&nbsp;1, 3, 4, 5&nbsp;]</h4>
</em>

<h3>Work through the array from left to right.</h3>

<h3>Return the resulting array.</h3>

<br>

<h3>Example 1:</h3>

<pre>function trouble(&nbsp;[1, 3, 5, 6, 7, 4, 3], &nbsp;7&nbsp;)</pre>

<p>The function will return the following array: &nbsp;<strong><em>[&nbsp;1, 3, 5, 6, 7, 4&nbsp;]</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>function trouble(&nbsp;[2, 2, 2, 2, 2, 2], &nbsp;4&nbsp;)</pre>

<p>The function will return the following array: &nbsp;<strong><em>[&nbsp;2&nbsp;]</em></strong></p>

<br>

<h3>Example 3:</h3>

<pre>function trouble(&nbsp;[2, 6, 2], &nbsp;8&nbsp;)</pre>

<p>The function will return the following array: &nbsp;<strong><em>[&nbsp;2, 2&nbsp;]</em></strong></p>

</div>
