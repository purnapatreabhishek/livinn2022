const express = require('express');
const { protect, protectAdmin } = require('../controller/authController');
const {
  getRequest,
  createRequest,
  exportCsv,
} = require('../controller/requestController');
const router = express.Router();

router.route('/').get(protect, protectAdmin, getRequest).post(createRequest);
router.get('/export', protect, protectAdmin, exportCsv);

module.exports = router;
