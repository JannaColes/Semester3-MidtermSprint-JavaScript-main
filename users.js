const fs = require('fs');

const usersFilePath = './users.json';

function searchUser(query) {
  const users = getUsers();
  const user = users.find(u => u.username === query || u.email === query || u.phone === query);
  if (user) {
    console.log('User found:', user);
  } else {
    console.log('User not found');
  }
}

function getUsers() {
  if (fs.existsSync(usersFilePath)) {
    return JSON.parse(fs.readFileSync(usersFilePath));
  } else {
    return [];
  }
}

function updateUser(user) {
  const users = getUsers();
  const index = users.findIndex(u => u.username === user.username);
  if (index !== -1) {
    users[index] = user;
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    console.log('User updated successfully');
  } else {
    console.log('User not found');
  }
}

module.exports = {
  searchUser,
  updateUser
};