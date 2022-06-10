const User = require("../models/user.model");
const { encrypt } = require("../lib/encryptor");

function getAll() {
  return User.find();
}

async function createUser({ username, email, password }) {
  const encryptedPassword = await encrypt(password);

  return User.create({
    username,
    email,
    password: encryptedPassword,
  });
}

module.exports = {
  getAll,
  createUser,
};
