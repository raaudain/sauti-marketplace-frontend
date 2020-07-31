exports.up = function(knex) {
  return (
    knex.schema

      // Users table
      .createTable("Users", table => {
        table.increments();

        table.string("username", 128).notNullable().unique();

        table.string("password", 128).notNullable();

        table.string("email", 128).notNullable();

        table.string("last_name", 128);

        table.string("first_name", 128);

        table.string("company_name", 128);

        table.string("street_address", 128);

        table.string("city", 128);

        table.string("country", 128);

        table
          .string("profile_img", 128)
          .defaultTo("https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png");
      })

      // Items table
      .createTable("Items", table => {
        table.increments();

        table.string("item_name", 128).notNullable();

        table.string("item_description", 128).notNullable();

        table.float("item_price").notNullable();

        table
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("Users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

        table
          .integer("category_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("Category")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

        table
          .integer("location_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("Location")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })

      // Category table
      .createTable("Category", table => {
        table.increments();

        table
          .integer("loc_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("Location")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

        table.string("category", 128).notNullable().unique();

        table.string("imgUrl", 255);
      })

      // Location table
      .createTable("Location", (table) => {
        table.increments();

        table
          .integer("cat_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("Category")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");

        table.string("country", 128).notNullable().unsigned();
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Items")
    .dropTableIfExists("Users")
    .dropTableIfExists("Location")
    .dropTableIfExists("Category");
};
