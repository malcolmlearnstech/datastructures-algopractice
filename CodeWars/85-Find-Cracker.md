<div align = "center">

# Find Cracker

</div>

<div align= "center">

<h3>Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. Ex:</h3>

</div>

<br>

<pre>
var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 110, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]],
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
]
</pre>

<br>

<div align= "center">

<h3>
The scores for each grade is:
<br>
<br>
•&nbsp; <strong>A</strong>: <em>30 points</em>

<br>
•&nbsp; <strong>B</strong>: <em>20 points</em>

<br>
•&nbsp; <strong>C</strong>: <em>10 points</em>

<br>
•&nbsp; <strong>D</strong>: <em>5 points</em>

<br>
<strong>Everything else</strong>: <em>0 points</em>
<br>
<br>
If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

<br>

Returns the name of the hacked name as an array when scoring with this rule.

</h3>

</div>

<br>
<pre>
var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]], &nbsp;&nbsp;  <-- name1 total point is over 200 (<em>hacked</em>)
  ["name2", 110, ["B", "A", "A", "A"]],      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <--name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]],          &nbsp;&nbsp;  <--name3 point is 200 but real point is 90 (<em>hacked</em>)
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]  <--name4 point is right
]
</pre>

<br>
<div align="center">

<p>The function will return the following array: &nbsp;<em><strong>[&nbsp;"name1", &nbsp;"name3"]</strong></em></p>
</div>
