<div align = "center">

# Count the Number of Vowel Strings in Range (LeetCode #2586)

</div>

<div align = "center">

<h3>You are given a 0-indexed array of string <em>words</em> and two integers <em>left</em> and <em>right</em>.</h3>

<h3>A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are&nbsp; <em>'a'</em>,&nbsp; <em>'e'</em>,&nbsp; <em>'i'</em>,&nbsp; <em>'o'</em>, and&nbsp; <em>'u'</em>.</h3>

<h3>Return <em>the number of vowel strings</em> words[ i ] where i <em>belongs to the inclusive range</em> [ left, right ].</h3>

<br>

<h3>Example 1:</h3>

<pre>vowelStrings(&nbsp;words = ["are", "amy", "u"], left = 0, right = 2&nbsp;)</pre>

<p>The function will return the following result: <em><strong>2</strong><br><br>- "are" is a vowel string because it starts with 'a' and ends with 'e'.<br>- "amy" is not a vowel string because it does not end with a vowel.<br>- "u" is a vowel string because it starts with 'u' and ends with 'u'.<br><br>The number of vowel strings in the mentioned range is 2.</em></p>

<br>

<h3>Example 2:</h3>

<pre>vowelStrings(&nbsp;words = ["hey", "aeo", "mu", "ooo", "artro"], left = 1, right = 4&nbsp;)</pre>

<p>The function will return the following result: <em><strong>3</strong><br><br>- "aeo" is a vowel string because it starts with 'a' and ends with 'o'.<br>- "mu" is not a vowel string because it does not start with a vowel.<br>- "ooo" is a vowel string because it starts with 'o' and ends with 'o'.<br>- "artro" is a vowel string because it starts with 'a' and ends with 'o'.<br><br>The number of vowel strings in the mentioned range is 3.</em></p>

</div>
