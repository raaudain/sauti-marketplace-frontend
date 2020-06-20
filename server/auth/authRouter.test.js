const request = require("supertest");

const server = require("../api/server");

// Tests registration
describe("POST /register", function() {
  test("should return a 201", function() {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: `${Math.random()}`,
        email: `${Math.random()}@test.com`,
        password: "pass",
      })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });

  test("should return a 400 Bad Request", function() {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: Math.random(),
        email: "",
        password: "test",
      })
      .then(res => {
        expect(res.status).toBe(400);
      });
  });
});

// Tests login
describe("POST /login", function() {
  test("should return a 200 OK", function() {
    // Registers user then tests login
    return request(server)
      .post("/api/auth/register")
      .send({
        username: "testing",
        email: `${Math.random()}@test.com`,
        password: "pass",
      })
      .then(() => {
        return request(server)
          .post("/api/auth/login")
          .send({
            username: "testing",
            password: "pass",
          })
          .then(res => {
            expect(res.status).toBe(200);
          });
      });
  });

  test("should return a 401 Unauthorized", function () {
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "test",
        password: "pass",
      })
      .then(res => {
        expect(res.status).toBe(401);
      });
  });
});
