module.exports = {
  getCountries,
  getCountry,
  getAverage,
};

const db = require("../../dbConfig.js");

function getCountries() {
  return db("location")
    .orderBy("country");
}

function getCountry() {
  return db("location")
    .select("country")
    .where({ id })
    .first();
}

function getAverage(id) {
  return db("location as loc")
    .select(
      "loc.id as country_id",
      "loc.country",
      "cat.id as category_id",
      "i.id as item_id",
      "i.item_name",
      "i.item_price"
    )
    .join("category as cat", "loc.id", "cat.location_id")
    .join("items as i", "cat.id", "i.category_id")
    .where("cat.id", id);
}
