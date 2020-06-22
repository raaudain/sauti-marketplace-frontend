const router = require("express").Router();

const Location = require("./locationModel");
const Items = require("../items/itemsModel");

// Renders countries
router.get("/", (req, res) => {
  Location
    .getCountries()
    .then(ctry => {
      res.status(200).json(ctry);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Renders specific country
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Location
    .getCountry(id)
    .then(ctry => {
      res.status(200).json(ctry);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Renders items for specific country
router.get("/:id/items", (req, res) => {
  const { id } = req.params;

  Items
    .getItemsCountry(id)
    .then(ctry => {
      res.status(200).json(ctry);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Returns the average of an item's price based on location
router.get("/:id/category/:id/items/average", (req, res) => {
  const { id } = req.params;

  Location.getCountries(id)
    .then(() => {
      return Location
        .getAverage(id)
        .then(ctry => {
          const price = [];

          ctry.forEach(e => price.push(e.item_price));

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

// Renders items based on location and category
router.get("/:id/category/:id/items", (req, res) => {
  const { id } = req.params;

  Location.getCountry(id).then(() => {
    return Location
      .getAverage(id)
      .then(loc => {
        res.status(200).json(loc);
      });
  });
});

module.exports = router;
