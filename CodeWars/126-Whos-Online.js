const whosOnline = (friends) => {
  let userStatus = {
    online: [],
    offline: [],
    away: [],
  };

  friends.map((element) => {
    if (element.status === 'offline') {
      userStatus.offline.push(element.username);
    } else if (element.status === 'online' && element.lastActivity > 10) {
      userStatus.away.push(element.username);
    } else {
      userStatus.online.push(element.username);
    }
  });

  if (userStatus.online.length === 0) {
    delete userStatus.online;
  }
  if (userStatus.away.length === 0) {
    delete userStatus.away;
  }
  if (userStatus.offline.length === 0) {
    delete userStatus.offline;
  }

  return userStatus;
};

/*
REFACTOR SOLUTION -

When mapping thru the array of objects, we can store the user 
status and user name in variables to avoid repeating such long 
references to them in their corresponding conditionals. We can 
also use a for-in loop after populating the return object to check 
for which status have no names associated with them.
*/
