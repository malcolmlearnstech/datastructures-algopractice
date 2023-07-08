<div align = "center">

# Character Counter

</div>

<div align = "center">

<h3>You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return <em>true</em> if it is valid, or <em>false</em> if it is not.</h3>

<br>

<h3>For this kata, capitals are considered the same as lowercase letters. Therefore: <em>"A" == "a"</em></h3>

<br>

<h3>The input is a string (with no spaces) containing <em>[a-z],[A-Z],[0-9]</em> and common symbols. The length will be <em>0 < length < 100</em>.</h3>

<br>
<br>
<br>

<h3>Example 1:</h3>

<pre>validateWord("abcabc")</pre>

<p>The function will return the following: &nbsp;<em><strong>true</strong></em></p>
<p><em>Input is a valid word because <strong>"a"</strong> appears twice, <strong>"b"</strong> appears twice, and <strong>"c"</strong> appears twice.</em></p>

<br>

<h3>Example 2:</h3>

<pre>validateWord("abcabcd")</pre>

<p>The function will return the following: &nbsp;<em><strong>false</strong></em></p>
<p><em>Input is NOT a valid word because <strong>"a"</strong> appears twice, <strong>"b"</strong> appears twice, <strong>"c"</strong> appears twice, but <strong>"d"</strong> only appears once!</em></p>

<br>

<h3>Example 3:</h3>

<pre>validateWord("123abc!")</pre>

<p>The function will return the following: &nbsp;<em><strong>true</strong></em></p>
<p><em>Input is a valid word because all of the characters only appear once in the word.</em></p>

<br>

</div>
