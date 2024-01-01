<div align = 'center'>

# Find the Mine!

</div>

<div align = 'center'>

<h3>You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.</h3>

<h3>Write a function <em>mineLocation</em>/<em>MineLocation</em> that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer <strong><em>1</em></strong> in the 2D array. Areas in the 2D array that are not the mine will be represented as <strong><em>0</em></strong>s.</h3>

<h3>The location returned should be an array where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.</h3>

<br>

<h3>Example 1:</h3>

<pre>function mineLocation&nbsp;(&nbsp;[ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>[0, 0]</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>function mineLocation&nbsp;(&nbsp;[ [0, 0, 0], [0, 1, 0], [0, 0, 0] ]&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>[1, 1]</em></strong></p>

<br>

<h3>Example 3:</h3>

<pre>function mineLocation&nbsp;(&nbsp;[ [0, 0, 0], [0, 0, 0], [0, 1, 0] ]&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>[2, 1]</em></strong></p>

</div>
