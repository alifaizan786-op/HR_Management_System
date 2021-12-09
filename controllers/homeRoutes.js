const router = require('express').Router();
const { Employee, Role, Benefit, Time_off } = require('../models');
const withAuth = require('../utils/auth');

// when a user logs in this is the first page they would see
router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await Employee.findByPk(req.session.userId, {
            attributes: { exclude: ['password'] },
            include: {model:Role}
        });

        const user = userData.get({ plain: true });
        console.log(user)
        res.render('profile', {
            user,
            loggedIn: true
        })

    } catch (err) {
        res.status(501).json(err);
    }
});

//this page will render all employee data and will be only accessible for CFO/CEO/HR/Branch Manager
router.get('/allemp', withAuth, async (req, res) => {
    try {
        const userData = await Employee.findAll({ where: { branch_id: req.session.branchId } }, {
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: Benefit,
                    attributes: ['id', 'retirement', 'dental', 'health', 'paidTO'],
                },
                {
                    model: Role,
                    attributes: ['id', 'title', 'salary'],
                },
            ],
        });

        const user = userData.get({ plain: true });
       
        res.render('allemp', {
            user,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

//time off page for emp, where employee can request timeoff
router.get('/timeoff', withAuth, async (req, res) => {
    try {
        res.render('timeoff', {
            loggedIn: true
        });
    } catch (err) {
        res.status(500).status(err)
    }
});

//time off page for approvals for hr
router.get('/timeoffappr', withAuth, async (req, res) => {
    try {
        const timeOffData = await Time_off.findAll();

        const timeOff = timeOffData.get({ plain: true });

        res.render('timeoffappr', {
            loggedIn: true
        });
    } catch (err) {
        res.status(500).status(err)
    }
});

//this page will have drop down for the CEO/CFO to select a branch
router.get('/allemp/:id', withAuth, async (req, res) => {
    try {
        const userData = await Employee.findAll({ where: { branch_id: req.params.id } }, {
            attributes: { exclude: ['password'] },
        });

        const user = userData.get({ plain: true });

        res.render('allemp', {
            user,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

// all employee page for branch manager/CEO/CFO
router.get('/allemp/selectbranch', withAuth, async (req, res) => {
    try {
        const userData = await Employee.findAll({ where: { branch_id: req.params.id } }, {
            attributes: { exclude: ['password'] },
        });

        const user = userData.get({ plain: true });

        res.render('selectbranch', {
            user,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

// benefits page
router.get('/benefits', withAuth, async (req, res) => {
    try {
        const userData = await Role.findOne({ where: { id: req.session.roleId } }, {
            include: [
                {
                    model:Benefit
                }
            ]
        });

        const user = userData.get({ plain: true });

        console.log(user)

        res.render('benefits', {
            user,
            loggedIn: true
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//if the user is logged in then they would be taken to the profile page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;