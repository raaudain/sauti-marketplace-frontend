const router = require("express").Router();

const Categories = require("./categoryModel");
const Items = require("../items/itemsModel");
const Location = require("../location/locationModel");
const validate = require("../middleware/validate");

// Renders all categories
router.get("/", (req, res) => {
  Categories
    .getCategories()
    .then(category => {
      res.status(200).json(category);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Renders specific category
router.get("/:id", validate.validateCategoryId, (req, res) => {
  const { id } = req.params;

  Categories
    .getCategories(id)
    .then(cat => {
      res.status(200).json(cat);
    })
    .catch(err => {
      console.log(err);
      res.status(500).join({ message: `${err}` });
    });
});

// Render items for category
router.get("/:id/items", (req, res) => {
  const { id } = req.params;

  Items
    .getItemsCategory(id)
    .then(cat => {
      res.status(200).join(cat);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Renders the average of an item's price based on location
router.get("/:id/location/:id/items/average", (req, res) => {
  const { id } = req.params;

  Categories.getCountry(id)
    .then(() => {
      return Location
        .getAverage(id)
        .then(loc => {
          const price = [];

          loc.forEach(e => price.push(e.item_price));

          const total = price.reduce((acc, val) => acc + val, 0);
          const avg = total / price.length;

          res.status(200).json(avg);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Renders items based on category and location
router.get("/location/:id", (req, res) => {
  const { id } = req.params;

  Categories
    .getCategoryLocation(id)
    .then(() => {
      return Categories
        .getCategoryLocationAverage(id)
        .then(avg => {
          res.status(200).json(avg);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Renders the average of an item's price based on location
router.get("/location/:id/avg", (req, res) => {
  const { id } = req.params;

  Categories
    .getCategoryLocation(id)
    .then(() => {
      return Categories
        .getCategoryLocationAverage(id)
        .then(avg => {
          const price = [];

          avg.forEach(e => price.push(e.item_price));

          const total = price.reduce((acc, val) => acc + val, 0);
          const average = total / price.length;

          res.status(200).json(average);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

module.exports = router;
