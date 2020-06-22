const request = require("supertest");
const server = require("../../../api/server");

describe("GET /category", function() {
  test("should return 200 OK", function() {
    return request(server)
      .get("/api/category")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 404 Not Found", function() {
    return request(server)
      .get("/api/category1")
      .then(res => {
        expect(res.status).toBe(404);
      });
  });

  test("should return 200 OK", function() {
    return request(server)
      .get("/api/category/1")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 400 Bad Request", function() {
    return request(server)
      .get("/api/category/0")
      .then(res => {
        expect(res.status).toBe(400);
      });
  });

  test("should return 200 OK", function() {
    return request(server)
      .get("/api/category/1/items")
      .then(res => {
          expect(res.status).toBe(200);
      });
  });
});
