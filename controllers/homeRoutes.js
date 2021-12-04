const router = require('express').Router();
const { Employee, Role, Benefit, Time_off } = require('../models');
const withAuth = require('../utils/auth');

// when a user logs in this is the first page they would see
router.get('/profile', withAuth, async(req, res) => {
    try {
        const userData = await Employee.findByPk(req.session.userId, {
            attributes : { exclude: ['password'] },
            include: [{ model: Employee }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//all emp page


//time off page for emp


//time off page for approvals for hr


//all branch page for the CEO/CFO


// all employee page for branch manager/CEO/CFO


// benefits page


//

//if the user is logged in then they would be taken to the profile page
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;