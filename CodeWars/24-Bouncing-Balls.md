<div align = "center">

# Bouncing Balls

</div>

<div align = "center">

<h3>A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, <em>h</em>, is known. He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66). His mother looks out of a window 1.5 meters from the ground. How many times will the mother see the ball pass in front of her window (including when it's falling <em>and</em> bouncing?</h3>

<h3><strong>Three conditions must be met for a valid experiment:</strong>
<ul>
<li>Float parameter "h" in meters must be greater than 0</li>
<li>Float parameter "bounce" must be greater than 0 and less than 1</li>
<li>Float parameter "window" must be less than h.</li>
</ul>
</h3>

<h3>
<strong>If all three conditions above are fulfilled, return a positive integer, otherwise return -1.</strong>
</h3>

<h3> <strong>Note:</strong> The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
</h3>

<h3><strong>Examples:</strong>
</h3>

<pre>- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled.

</pre>
</div>
