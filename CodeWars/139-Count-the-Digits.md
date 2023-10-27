<div align = 'center'>

# Count the Digits

</div>

<div align = 'center'>

<h3>Take an integer <em>n (n >= 0)</em> and a digit <em>d (0 <= d <= 9)</em> as an integer.</h3>

<h3>Square all numbers <em>k (0 <= k <= n)</em> between 0 and n.</h3>

<h3>Count the numbers of digits <em>d</em> used in the writing of all the <em>k**2</em>.</h3>

<h3>Implement the function taking <em>n</em> and <em>d</em> as parameters and returning this count.</h3>

<pre>
n = 10, d = 1 
the k*k are <em>0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100</em>
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
<br>
The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
<em>1, 16, 81, 100, 121, 144, 169, 196, 361, 441</em>.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
</pre>

<h4><sup>*</sup>Note that <em>121</em> has twice the digit 1.</h4>

</div>
