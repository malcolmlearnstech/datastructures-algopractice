<div align = 'center'>

# A Wolf in Sheep's Clothing

</div>

<div align = 'center'>

<h3>Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.</h3>

<h3>Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:</h3>

<pre>
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]     
<div align = 'left'> 
                             7      6      5      4      3            2      1
</div>
(YOU ARE THE FRONT OF THE QUEUE)
</pre>

<h3>If the wolf is the closest animal to you, return <em>"Pls go away and stop eating my sheep"</em>. Otherwise, return <em>"Oi! Sheep number N! You are about to be eaten by a wolf!"</em> where <em>N</em> is the sheep's position in the queue.</h3>

<h4><em>Note: there will always be exactly one wolf in the array*</em></h4>

<br>

<h3>Example 1:</h3>

<pre>function warnTheSheep(&nbsp;["sheep", "sheep", "sheep", "wolf", "sheep"]&nbsp;)</pre>

<p>The function will return the following string: &nbsp;<strong><em>"Oi! Sheep number 1! You are about to be eaten by a wolf!"</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>function warnTheSheep(&nbsp;["sheep", "sheep", "wolf"]&nbsp;)</pre>

<p>The function will return the following string: &nbsp;<strong><em>"Pls go away and stop eating my sheep"</em></strong></p>

<br>

<h3>Example 3:</h3>

<pre>function warnTheSheep(&nbsp;["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]&nbsp;)</pre>

<p>The function will return the following string: &nbsp;<strong><em>"Oi! Sheep number 6! You are about to be eaten by a wolf!"</em></strong></p>

</div>
