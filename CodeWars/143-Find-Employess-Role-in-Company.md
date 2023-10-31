<div align = 'center'>

# Find An Employee's Role in the Company

</div>

<div align = 'center'>

<h3>You get a new job working for Eggman Movers. Your first task is to write a method that will allow the admin staff to enter a person’s name and return what that person's role is in the company.</h3>

<h3>You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"</h3>

<h3>The array is preloaded and can be referenced using the variable <em>employees</em> (<em>$employees</em> in Ruby). It uses the following structure.</h3>

<pre>let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, ...... ]</pre>

<h3>There are no duplicate names in the array and the name passed in will be a single string with a space between the first and last name i.e. Jane Doe or just a name.</h3>

<br>

<h3>Example 1:</h3>

<pre>function findEmployeesRole(&nbsp;"Dipper Pines"&nbsp;)</pre>

<p>The function will return the following result: &nbsp;<strong><em>"Does not work here!"</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>function findEmployeesRole(&nbsp;"Morty Smith"&nbsp;)</pre>

<p>The function will return the following result: &nbsp;<strong><em>"Truck Driver"</em></strong></p>

<br>

<h3>Example 3:</h3>

<pre>function findEmployeesRole(&nbsp;"Anna Bell"&nbsp;)</pre>

<p>The function will return the following result: &nbsp;<strong><em>"Admin"</em></strong></p>

</div>
