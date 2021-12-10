const router = require('express').Router();
const { Employee, Role, Benefit, Time_off } = require('../../models');


//Creating a post request to create employee, this will only be accessible by HR
router.post('/newemp', async (req, res) => {
    try {
        console.log(req.body.privilege_Level)
        console.log(req.body.first_Name)
        const userData = await Employee.create(
            {
                privilege_Level: req.body.privilege_Level,
                first_Name: req.body.first_Name,
                last_Name: req.body.last_Name,
                password: req.body.password,
                email: req.body.email,
                role_id: req.body.role_id,
                branch_id: req.body.branch_id,
                employeeStatus: req.body.employeeStatus,
            }
        );
            console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

// Creating a post request for the employee to sign in
// and save the level of privilege in the cookies, for the handlebars to detemine
// what to show this level of user and waht this level of user can do
router.post('/login', async (req, res) => {
    try {
        const userData = await Employee.findOne({ where: { email: req.body.email } })

        if (!userData) {
            res.status(400).json({ message: 'user does not exists' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Email/password is incorrect' });
            return;
        }
        const roleData = await Role.findOne({ where: { id: userData.role_id } });
        console.log(roleData.title)
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.userPrivilegeLevel = userData.privilege_Level;
            req.session.branchId = userData.branch_id;
            req.session.roleId = userData.role_id;
            req.session.loggedIn = true;


            res.json({
                user: userData, 
                role: roleData.title,
                message: 'You are now logged in'
            })
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Creating a post request for signout, which will also destroy cookies
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});

// Creating put request, only accessible by HR to change the privilege, role, branch or PTO
// Creating put request, accessible by every emplyee to change the email and the password
router.put('/:id', async (req, res) => {
    try {
        const userData = Employee.update(
            {
                privilege_Level: req.body.privilege_Level,
                first_Name: req.body.first_Name,
                last_Name: req.body.last_Name,
                password: req.body.password,
                email: req.body.email,
                role_id: req.body.role_id,
                branch_id: req.body.branch_id,
                remainingPTO: req.body.remainingPTO
            },
            {
                where: {
                    id: req.params.id
                },
            });
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err);
    };
});
module.exports = router;