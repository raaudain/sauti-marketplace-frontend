module.exports = {
  getItems,
  getItem,
  addItem,
  findUser,
  updateItem,
  removeItem,
  getItemsCategory,
  getItemsCountry,
  getAverageForItemCountry
};

const db = require("../../dbConfig");

function getItems(userId) {
  return db("users as u")
    .select("i.id", "i.item_name", "i.item_description", "i.item_price")
    .join("items as i", "u.id", "i.user_id")
    .where("u.id", userId);
}

function getItemsCategory(categoryId) {
  return db("category as cat")
    .select("i.id", "i.item_name", "i.item_description", "i.item_price")
    .join("items as i", "cat.id", "i.country_id")
    .where("cat.id", categoryId);
}

function getItemsCountry(countryId) {
  return db("location as loc")
    .select("i.id", "i.item_name", "i.item_description", "i.item_price")
    .join("items as i", "loc.id", "i.location_id")
    .where("loc.id", countryId);
}

function getItem(id) {
  return db("items")
    .select("item_name", "item_description", "item_price")
    .where({ id })
    .first();
}

function getAverageForItemCountry(id) {
  return db("location as loc")
    .select("i.item_price")
    .join("items as i", "loc.id", "i.location_id")
    .where("loc.id", id);
}

function addItem(item) {
  return db("items")
    .insert(item)
    .then(ids => {
      const [id] = ids;

      return db("users")
        .where({ id })
        .first();
    });
}

function findUser(id) {
  return db("users")
    .where({ id })
    .first();
}

function updateItem(id, changes) {
  return db("items")
    .where("id", id)
    .update(changes);
}

function removeItem(id) {
  return db("items")
    .where("id", id)
    .del();
}
