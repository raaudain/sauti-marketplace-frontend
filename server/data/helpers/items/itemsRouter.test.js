const request = require("supertest");
const server = require("../../../api/server");

describe("GET users/:id/items", function() {
  test("should return 200 OK", function() {
    return request(server)
      .get("/api/users/1/items")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 404 Not Found", function() {
    return request(server)
      .get("/api/users1/4/items")
      .then(res => {
        expect(res.status).toBe(404);
      });
  });

  test("should return 200 OK", function() {
    return request(server)
      .get("/api/users/1/items/14")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 400 Bad Request", function() {
    return request(server)
      .get("/api/users/0/items")
      .then(res => {
        expect(res.status).toBe(400);
      });
  });
});
