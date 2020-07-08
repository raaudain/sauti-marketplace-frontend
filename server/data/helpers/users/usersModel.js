module.exports = {
  getUsers,
  getUser,
  addUser,
  findUser,
  updateUser,
  removeUser
};

const db = require("../../dbConfig");

function getUsers() {
  return db("users")
}

function getUser(id) {
  return db("users")
    .select("id", "username", "profile_img")
    .orderBy("username");
}

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

function findUser(user) {
  return db("users")
    .where(user);
}

function updateUser(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function removeUser(id) {
  return db("users")
    .where("id", id)
    .del();
}
