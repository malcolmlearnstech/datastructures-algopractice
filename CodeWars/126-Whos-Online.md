<div align = "center">

# Who's Online

</div>

<div align = "center">

<h3>You have a group chat application, but who is online!?</h3>

<h3>You want to show your users which of their friends are online and available to chat!</h3>

<h3>Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is <em>online</em>, <em>offline</em> and <em>away</em>.</h3>

<h3>If someone is online but their <em>lastActivity</em> was more than 10 minutes ago they are to be considered <em>away</em>.</h3>

<br>

<h3>The input data has the following structure:</h3>

<pre>
[ &nbsp;{username: 'David', status: 'online',lastActivity: 10}, 
{username: 'Lucy', status: 'offline', lastActivity: 22}, 
{username: 'Bob', status: 'online', lastActivity: 104}&nbsp;]
</pre>

<h3>The corresponding output should look as follows:</h3>

<pre>{&nbsp;online: ['David'], offline: ['Lucy'], away: ['Bob']&nbsp;}</pre>

<h3>If for example, no users are online the output should look as follows:</h3>

<pre>{&nbsp;offline: ['Lucy'], away: ['Bob']&nbsp;}</pre>

<br>

<h3>Example 1:</h3>

<pre>whosOnline([ &nbsp;{username: 'David', status: 'online',lastActivity: 10}, 
{username: 'Lucy', status: 'online', lastActivity: 0}, 
{username: 'Bob', status: 'online', lastActivity: 3},
{username: 'Julie', status: 'offline', lastActivity: 104},
{username: 'Benny', status: 'online', lastActivity: 38}&nbsp;])</pre>

<p>The function will return the following array: &nbsp;<strong><em>{&nbsp;online: [&nbsp;'David', 'Lucy', 'Bob'&nbsp;], offline: [&nbsp;'Julie'&nbsp;], away: [&nbsp;'Benny'&nbsp;]&nbsp;}</em></strong></p>

<br>

<h3>Example 2:</h3>

<pre>whosOnline([ &nbsp;{username: 'Latte', status: 'online',lastActivity: 50}, 
{username: 'Karen', status: 'online', lastActivity: 13}, 
{username: 'Puffin', status: 'offline', lastActivity: 91},
&nbsp;])</pre>

<p>The function will return the following array: &nbsp;<strong><em>{&nbsp;offline: [&nbsp;'Puffin'&nbsp;], away: [&nbsp;'Latter', 'Karen'&nbsp;]&nbsp;}</em></strong></p>

</div>
