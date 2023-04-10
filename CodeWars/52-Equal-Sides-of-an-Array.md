<div align = "center">

# Equal Sides Of An Array

</div>

<div align="center">

<h3>You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.</h3>

<br>
<h2>For example:</h2>

<em><p>Let's say you are given the array</em> <strong>[1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;3,&nbsp;2,&nbsp;1]</strong></p>
<em><p>Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index</em> &nbsp;<strong>[1,&nbsp;2,&nbsp;3]</strong>&nbsp; <em>and the sum of the right side of the index</em> &nbsp;<strong>[3,&nbsp;2,&nbsp;1]&nbsp;</strong> <em>both equal 6.</em></p>

<br>
<h3>Let's look at another one:</h3>

<em><p>You are given the array<em> </strong>[1,&nbsp;100,&nbsp;50,&nbsp;-51,&nbsp;1,&nbsp;1]</strong>:</p>
<em><p>Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index</em> <strong>[1]</strong> <em>and the sum of the right side of the index</em> <strong>[50,&nbsp;-51,&nbsp;1,&nbsp;1]</strong> <em>both equal 1.</em></p>

<br>
<h3>Last one:</h3>

<em><p>You are given the array</em> <strong>[20,&nbsp;10,&nbsp;-80,&nbsp;10,&nbsp;10,&nbsp;15,&nbsp;35]</strong></p>
<em><p>At index 0 the left side is []</p></em>
<em><p>The right side is</em> <strong>[10,&nbsp;-80,&nbsp;10,&nbsp;10,&nbsp;15,&nbsp;35]</strong></p>
<em><p>They both are equal to 0 when added(Empty arrays are equal to 0 in this problem). Index 0 is the place where the left side and right side are equal.</p></em>

</div>
