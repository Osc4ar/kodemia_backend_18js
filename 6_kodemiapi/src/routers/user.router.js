const { response } = require("express");
const express = require("express");
const User = require("../usecases/user.usecase");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.getAll();

    res.json(allUsers);
  } catch (error) {
    console.error(error);

    response.statusCode = 500;
    response.json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = req.body;

    const createdUser = await User.createUser(newUser);

    res.statusCode = 201;
    res.json(createdUser);
  } catch (error) {
    console.error(error);

    response.statusCode = 500;
    response.json({ error });
  }
});

module.exports = router;
