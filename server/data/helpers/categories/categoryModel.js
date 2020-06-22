module.exports = {
    getCategories,
    getCategory,
    getCategoryLocation,
    getCategoryLocationAverage,
    getTest
};

const db = require("../../dbConfig");

function getCategories() {
  return db("category")
    .select("id", "category", "imgUrl");
}

function getCategory(id) {
  return db("category")
    .select("category", "imgURL")
    .where({ id })
    .first();
}

function getCategoryLocation(id) {
  return db("category")
    .select("*")
    .join("location", "category.id", "location.category_id")
    .where("location.category", id);
}

function getCategoryLocationAverage(id) {
  return db("category")
    .select("*")
    .join("location", "category.id", "location.category_id")
    .join("items", "location.id", "items.category_id")
    .where("location.category_id", id);
}

function getTest(id) {
  return db("category")
    .select("*")
    .join("location", "category.id", "location.category_id")
    .where("category.id", id);
}

