<div align = "center">

# Spin Around, Touch the Ground

</div>

<div align = "center">

<h3>Given a list of directions to spin, <em>"left"</em> or <em>"right"</em>, return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.</h3>

<pre>
• ["right", "right", "right", "right", "left", "right"]
• You spun right 4 times <strong><em>(90 * 4 = 360)</em></strong>
• You spun left once <strong><em>(360 - 90 = 270)</em></strong>
• But you spun right once more to make a full rotation <strong><em>(270 + 90 = 360)</em></strong>
</pre>

<br>

<h3>Example 1:</h3>

<pre>spinAround(&nbsp;["left", "right", "left", "right"]&nbsp;)</pre>

<p>The function will return the following result: &nbsp;<strong><em>0</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>spinAround(&nbsp;["right", "right", "right", "right", "right", "right", "right", "right"]&nbsp;)</pre>

<p>The function will return the following result: &nbsp;<strong><em>2</em></strong></p>

<br>

<h3>Example 3:</h3>

<pre>spinAround(&nbsp;["left", "left", "left", "left"]&nbsp;)</pre>

<p>The function will return the following result: &nbsp;<strong><em>1</em></strong></p>

</div>
