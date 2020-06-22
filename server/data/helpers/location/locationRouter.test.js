const request = require("supertest");
const server = require("../../../api/server");

describe("GET /location", function() {
  test("should return 200 OK", function() {
    return request(server)
      .get("/api/location")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 200 OK", function() {
    return request(server)
      .get("/api/location/1")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 200 OK", function() {
    return request(server)
      .get("/api/location/1/items")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 404 Bad Request", function() {
    return request(server)
      .get("/api/locations")
      .then(res => {
        expect(res.status).toBe(404);
      });
  });
});
