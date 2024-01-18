<div align = 'center'>

# New Cashier Does Not Know About Space or Shift

</div>

<div align = 'center'>

<h3>Some new cashiers started to work at your restaurant.</h3>

<h3>They are good at taking orders, but they don't know how to capitalize words, or use a space bar!</h3>

<h3>All the orders they create look something like this:</h3>

<pre>"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"</pre>

<h3>The kitchen staff are threatening to quit, because of how difficult it is to read the orders.</h3>

<h3>Their preference is to get the orders as a nice clean string with spaces and capitals like so:</h3>

<pre>"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"</pre>

<h3>The kitchen staff expect the items to be in the same order as they appear in the menu.</h3>

<h3>The menu items are fairly simple, there is no overlap in the names of the items:</h3>

<pre>
1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
</pre>

<br>

<h3>Example 1:</h3>

<pre>function getOrder&nbsp;(&nbsp;"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>function getOrder&nbsp;(&nbsp;"pizzachickenfriesburgercokemilkshakefriessandwich"&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>"Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"</em></strong></p>

<br>

<h3>Example 3:</h3>

<pre>function getOrder&nbsp;(&nbsp;"friesburgerburgermilkshakecokeburgeronionringsburgeronionringssandwich"&nbsp;)</pre>

<p>The function should return the following result: &nbsp;<strong><em>"Burger Burger Burger Burger Fries Sandwich Onionrings Onionrings Milkshake Coke"</em></strong></p>

</div>
