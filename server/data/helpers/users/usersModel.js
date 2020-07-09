module.exports = {
  getUsers,
  getUser,
  addUser,
  findUser,
  updateUser,
  removeUser
};

const db = require("../../dbConfig");

// Retrieves list of usernames
function getUsers() {
  return db("users")
    .select("id", "username", "profile_img")
    .orderBy("username");
}

// Retrieves user with id
function getUser(id) {
  return db("users")
    .select("id", "username", "profile_img")
    .orderBy("username");
}

// Adds user to database
function addUser(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;

      return db("users")
        .where({ id })
        .first();
    });
}

// Retrieves user with username
function findUser(user) {
  return db("users")
    .where(user);
}

// Updates user information
function updateUser(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

// Removes user from database
function removeUser(id) {
  return db("users")
    .where("id", id)
    .del();
}
