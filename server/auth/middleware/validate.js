function validateRegister(req, res, next) {
  const body = req.body;

  if (body && (!body.username || !body.email || !body.password)) {
    res.status(400).json({ message: "Missing required field" });
  } 
  else {
    next();
  }
}

function validateLogin(req, res, next) {
  const body = req.body;

  if (body && (!body.username || !body.password)) {
    res.status(400).json({ message: "Missing required field" });
  } 
  else {
    next();
  }
}

module.exports = { validateRegister, validateLogin };
