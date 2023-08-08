<div align = "center">

# Relative Ranks (LeetCode #506)

</div>

<div align = "center">

<h3>You are given an integer array <em>score</em> of size <em>n</em>, where <em>score[i]</em> is the score of the <em>i<sup>th</sup></em> athlete in a competition. All the scores are guaranteed to be unique.</h3>

<h3>The athletes are placed based on their scores, where the <em>1<sup>st</sup></em> place athlete has the highest score, the <em>2<sup>nd</sup></em> place athlete has the <em>2<sup>nd</sup></em> highest score, and so on. The placement of each athlete determines their rank:</h3>

<br>

<h3>• The <em>1<sup>st</sup></em> place athlete's rank is <em>"Gold Medal"</em>.</h3>
<h3>• The <em>2<sup>nd</sup></em> place athlete's rank is <em>"Silver Medal"</em>.</h3>
<h3>• The <em>3<sup>rd</sup></em> place athlete's rank is <em>"Bronze Medal"</em>.</h3>
<h3>• For the <em>4<sup>th</sup></em> place to the nth place athlete, their rank is their placement <br>number (i.e., the <em>x<sup>th</sup></em> place athlete's rank is "x").</h3>

<br>

<h3>Return an array answer of size <em>n</em> where <em>answer[i]</em> is the rank of the <em>i<sup>th</sup><em> athlete.</h3>

<br>

<h3>Example 1:</h3>

<pre>findRelativeRanks(&nbsp;[5, 4, 3, 2, 1]&nbsp;)</pre>

<p>The function will return the following result: &nbsp;<em><strong>["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]</strong></em></p>

<br>

<h3>Example 2:</h3>

<pre>findRelativeRanks(&nbsp;[10, 3, 8, 9, 4]&nbsp;)</pre>

<p>The function will return the following result: &nbsp;<em><strong>["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]</strong></em></p>

</div>
