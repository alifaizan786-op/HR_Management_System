const router = require('express').Router();
const { Employee, Role, Branch, Benefit, Time_off  } = require('../../models');


//Creating a post request to create employee, this will only be accessible by HR
router.post('/', async (req, res) => {
    try {
        const userData = await Employee.create(req.body);

        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err)
    }
})

// Creating a post request for the employee to sign in
// and save the level of privilege in the cookies, for the handlebars to detemine
// what to show this level of user and waht this level of user can do
router.post('/login', async (req, res)=> {
    try {
        const userData = await Employee.findOne({ where: { email :req.body.email } })

        if(!userData) {
            res.status(400).json({ message: 'user does not exists' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Email/password is incorrect' });
            return;
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.userPrivilegeLevel = userData.privilege_Level;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in'})
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Creating a post request for signout, which will also destroy cookies
router.post('/logout', (req, res)=> {
    if(req.session.loggedIn) {
        req.session.destroy(()=> {
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});

module.exports = router;