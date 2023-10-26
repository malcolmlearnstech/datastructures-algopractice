<div align = 'center'>

# Katastrophe!

</div>

<div align = 'center'>

<h3>You have been employed by the Japanese government to write a function that tests whether or not a building is strong enough to withstand a simulated earthquake.</h3>

<h3>A building will fall if the magnitude of the earthquake is greater than the strength of the building.</h3>

<h3>An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave, and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves. A shockwave is equal to the sum of the values of its tremors.</h3>

<pre>Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735</pre>

<h3>A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year. For more info on exponential decay, follow this link - [https://en.wikipedia.org/wiki/Exponential_decay](https://en.wikipedia.org/wiki/Exponential_decay)</h3>

<h3>Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.</h3>

<br>

<h3>Example 1:</h3>

<pre>function strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2)</pre>

<p>The function will return the following string: &nbsp;<strong><em>"Safe!"</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>function strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2)</pre>

<p>The function will return the following string: &nbsp;<strong><em>"Safe!"</em></strong></p>

<br>

<h3>Example 3:</h3>

<pre>function strongEnough([[5,8,7],[3,3,1],[4,1,2]], 3)</pre>

<p>The function will return the following string: &nbsp;<strong><em>"Needs Reinforcement!"</em></strong></p>

</div>
