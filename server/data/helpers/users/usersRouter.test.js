const request = require("supertest");
const server = require("../../../api/server");

describe("GET /users", function() {
  test("should return 200 OK", function() {
    return request(server)
      .get("/api/users")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return a 200 OK", function() {
    return request(server)
      .get("/api/users/1")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 200 OK", function() {
    return request(server)
      .get("/api/users/1/items")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 404 Bad Request", function() {
    return request(server)
      .get("/api/user")
      .then(res => {
        expect(res.status).toBe(404);
      });
  });
});
