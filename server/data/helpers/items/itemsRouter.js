const router = require("express").Router();

const Users = require("../users/usersModel");
const Items = require("./itemsModel");
const authenticate = require("../../../auth/middleware/authenticate");
const validate = require("../middleware/validate");

// Renders user's items
router.get("/:id/items", validate.validateUserId, (req, res) => {
  const { id } = req.params;

  Items
    .getItems(id)
    .then(item => {
      res.status(200).json(item);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Render specific item for specific user
router.get("/:id/items/:id", (req, res) => {
  const { id } = req.params;

  Users
    .getUser(id)
    .then(() => {
      return Items
        .getItem(id)
        .then(item => {
          res.status(200).json(item);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Adds new item
router.post("/:id/items", authenticate, (req, res) => {
  const { id } = req.params;
  const item = req.body;

  Items
    .findUser(id)
    .then(() => {
      return Items
        .addItem({
          user_id: id,
          item_name: item.item_name,
          item_description: item.item_description,
          category_id: item.category_id,
          location_id: item.location_id,
        })
        .then(() => {
        res.status(201).json(item);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Updates item information
router.put("/:id/items/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const change = req.body;

  Items
    .getItems(id)
    .then(() => {
      return Items
        .getItem(id)
        .then(() => {
          return Items
            .updateItem(id, change)
            .then(() => {
              res.status(200).json({ message: "Item data updated" });
            });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

// Deletes item
router.delete("/:id/items/:id", authenticate, (req, res) => {
  const { id } = req.params;

  Items
    .getItems(id)
    .then(() => {
      return Items
        .removeItem(id)
        .then(() => {
          res.status(200).json({ message: "Item removed" });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: `${err}` });
    });
});

module.exports = router;
