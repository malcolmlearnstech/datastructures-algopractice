<div align = "center">

# Find the K-Beauty of a Number (LeetCode #2269)

</div>

<div align = "center">

<h3>The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:</h3>
<br>

<h3>• It has a length of <strong>k</strong>.</h3>
<h3>• It is a divisor of <strong>num</strong>.</h3>
<br>

<h3>Given integers num and k, return the k-beauty of num.</h3>
<br>

<h3>Example 1:</h3>

<pre>divisorSubstrings(240, 2)</pre>

<p>The function will return the following: &nbsp;<em><strong>2</strong></em></p>
- <em>"24"</em> from <em>"240"</em>: 24 is a divisor of 240.<br>
- <em>"40"</em> from <em>"240"</em>: 40 is a divisor of 240.<br>
<br>
<br>

<h3>Example 2:</h3>

<pre>divisorSubstrings(430043, 2)</pre>

<p>The function will return the following: &nbsp;<em><strong>2</strong></em></p>
- <em>"43"</em> from <em>"430043"</em>: 43 is a divisor of 430043.<br>
- <em>"30"</em> from <em>"430043"</em>: 30 is not a divisor of 430043.<br>
- <em>"00"</em> from <em>"430043"</em>: 0 is not a divisor of 430043.<br>
- <em>"04"</em> from <em>"430043"</em>: 4 is not a divisor of 430043.<br>
- <em>"43"</em> from <em>"430043"</em>: 43 is a divisor of 430043.<br>
<br>
</div>
