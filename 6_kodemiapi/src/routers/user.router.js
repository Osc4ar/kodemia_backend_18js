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

    res.statusCode = 500;
    res.json({ error });
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

    res.statusCode = 500;
    res.json({ error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const loginInfo = req.body;

    const id = await User.login(loginInfo);

    res.json({
      success: true,
      data: {
        id,
      },
    });
  } catch (error) {
    console.error(error);

    if (
      error.message === "User not found" ||
      error.message === "Wrong password"
    ) {
      res.statusCode = 400;
    } else {
      res.statusCode = 500;
    }

    res.json({ error });
  }
});

module.exports = router;
