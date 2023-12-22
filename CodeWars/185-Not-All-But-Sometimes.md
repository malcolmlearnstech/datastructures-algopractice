<div align = 'center'>

# Not All But Sometimes All

</div>

<div align = 'center'>

<h3>Write</h3>

<pre>function remove(str, what)</pre>

<h3>that takes in a string str(text in Python) and an object/hash/dict/Dictionary what and returns a string with the chars removed in what. For example:</h3>

<pre>
remove('this is a string',{'t':1, 'i':2}) === 'hs s a string'
(<em>remove from 'this is a string' the first 't' and the first 2 i's.</em>)

remove('hello world',{'x':5, 'i':2}) === 'hello world'
(<em>there are no x's or i's, so nothing gets removed</em>)

remove('apples and bananas',{'a':50, 'n':1}) === 'pples d bnns'
(<em>we don't have 50 a's, so just remove it till we hit end of string.</em>)
</pre>

<br>

<h3>Example 1:</h3>

<pre>function remove&nbsp;(&nbsp;'this is a string', {'t':1, 'i':2}&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>'hs s a string'</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>function remove&nbsp;(&nbsp;'apples and bananas', {'a':50, 'n':1}&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>'pples d bnns'</em></strong></p>

<br>

<h3>Example 3:</h3>

<pre>function remove&nbsp;(&nbsp;'codewars', {'c':5, 'o':1, 'd':1, 'e':1, 'w':1, 'z':1, 'a':1, 'r':1, 's':1}&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>''</em></strong></p>

</div>
