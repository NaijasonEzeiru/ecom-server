const {
  verifyToken,
  verifyTokenAndAuth,
} = require("../../controllers/verifyToken");
const { updateUser, getUser } = require("../../controllers/usersController");

const router = require("express").Router();

router.route("/");

router.route("/:id").get(verifyTokenAndAuth, getUser).put(verifyTokenAndAuth, updateUser);

module.exports = router;
