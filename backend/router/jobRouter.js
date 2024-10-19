const express = require("express");
const {
  createJobDetails,
  getJobCards,
  getJobDetailsById,
} = require("../controller/jobController");
const { checkRole, authenticateJWT } = require("../middleware/auth");
const router = express.Router();

router.post("/create", authenticateJWT, checkRole(true), createJobDetails);
router.get("/", getJobCards);
router.get("/:jobId", getJobDetailsById);

module.exports = router;
