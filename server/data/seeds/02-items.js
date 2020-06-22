exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Items")
    .truncate()
    .then(function() {
      // Inserts seed entries
      let num = 1;

      return knex("Items").insert([
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
        {
          id: num++,
          item_name: Math.random(),
          item_description: "test",
          item_price: 9.99,
          user_id: Math.floor(Math.random() * 10) + 1,
          category_id: Math.floor(Math.random() * 42) + 1,
          location_id: Math.floor(Math.random() * 54) + 1
        },
      ]);
    });
};
