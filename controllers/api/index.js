const router = require('express').Router();
const userRoutes = require('./userRoutes');
const timeOffRoutes = require('./timeOffRoutes');

router.use('/empoyee', userRoutes);
router.use('/timeOff', timeOffRoutes);

module.exports = router;