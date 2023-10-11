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
