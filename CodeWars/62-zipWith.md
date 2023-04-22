<div align = "center">

# zipWith

</div>

<div align = "center">

<h3>zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values. The function value is one new array.</h3>
<br>

<h3>If the arrays are of unequal length, the output will only be as long as the shorter one.
(<em>Values of the longer array are simply not used.</em>)</h3>
<br>
<h3>Inputs should not be modified.</h3>

<h3>Example 1:</h3>

<pre>zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )</pre>

<p>The function will return the string: &nbsp;<em><strong>[1,10,100,1000]</strong></em></p>

<h3>Example 2:</h3>

<pre>zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )</pre>

<p>The function will return the string: &nbsp;<em><strong>[4,7,7,4,7,7]</strong></em></p>

<h3>Example 3:</h3>

<pre>zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )</pre>

<p>The function will return the string: &nbsp;<em><strong>[0,2,4,6]</strong></em></p>

</div>
