# DNA to RNA Conversion

<div align = "center">
  
  <h3> Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').  </h3>
  
  <h3>Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U'). </h3>
  
  <h3>Create a function which translates a given DNA string into RNA. For example:</h3>
  
  <pre><h3>"GCAT"  =>  "GCAU"</h3></pre>
  
  <h3> <em>The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. </em> </h3>


</div>

<h3>Example 1:</h3>
<pre>
Input: <em>'abc' </em>
</pre>

<p>
<em>Because the string has an odd number of characters, the second pair will have an underscore added to it.
  
 The function will return an array with the following:    <strong>['ab', 'c_']</strong>
    </em>
</p>

<h3>Example 2:</h3>
<pre>
Input: <em>'abcdef' </em>
</pre>

<p>
<em>Because the string has an even number of characters, every pair of characters will be filled in with no underscores.
  
  The function will return an array with the following:    <strong>['ab', 'cd', 'ef']</strong>
  </em>
</p>
