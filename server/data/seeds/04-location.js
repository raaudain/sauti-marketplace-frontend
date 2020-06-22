exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Location")
    .truncate()
    .then(function() {
      // Inserts seed entries
      let num = 1;

      return knex("Location").insert([
        {
          id: num++,
          country: "Nigeria",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Ethiopia",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Democratic Republic of the Congo",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Tanzania",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "South Africa",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Kenya",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Uganda",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Algeria",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Sudan",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Morocco",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Angola",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Mozambique",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Ghana",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Madagascar",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Cameroon",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Côte d'Ivoire",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Niger",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Burkina Faso",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Mali",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Malawi",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Zambia",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Senegal",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Chad",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Somalia",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Zimbabwe",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Guinea",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Rwanda",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Benin",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Burundi",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Tunisia",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "South Sudan",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Togo",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Sierra Leone",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Libya",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Congo",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Liberia",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Central African Republic",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Mauritania",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Eritrea",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Namibia",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Gambia",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Botswana",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Gabon",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Lesotho",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Guinea-Bissau",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Equatorial Guinea",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Mauritius",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Eswatini",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Djibouti",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Comoros",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Cabo Verde",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Sao Tome & Principe",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Seychelles",
          category_id: Math.floor(Math.random() * 41) + 1
        },
        {
          id: num++,
          country: "Egypt",
          category_id: Math.floor(Math.random() * 41) + 1
        },
      ]);
    });
};
