<div align = "center">

# Ziiiip!

</div>

<div align = "center">

<h3>Let's implement the zipObject function that enables such results:</h3>

<pre><em>zipObject(['fred', 'barney'], [30, 40])</em>
=> <strong>{ 'fred': 30, 'barney': 40 }</strong>

<em>zipObject([['fred', 30], ['barney', 40]])</em>
=> <strong>{ 'fred': 30, 'barney': 40 }</strong>
</pre>

<h3>The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.</h3>

<h3>If only keys are given, then set the values to undefined.</h3>

<pre><em>zipObject(['fred', 'barney'])</em> will return the following:
<strong>{ fred: undefined, barney: undefined }</strong>
</pre>

<h3>If neither keys nor values are specified, then return {}</h3>

<h3>Like so:</h3>

<pre>zipObject() will return the following:
<strong>{}</strong>
</pre>
</div>
