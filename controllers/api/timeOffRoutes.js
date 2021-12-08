const router = require('express').Router();
const { Employee, Role, Benefit, Time_off } = require('../../models');


// Creating post request for the employee, to request time off
router.post('/', async (req, res) => {
    try {
        const userTimeOff = await Time_off.create(req.body);

        res.status(200).json(userTimeOff);
    } catch (err) {
        res.status(400).json(err)
    }
})


// Creating a put request for the HR to deny or approve or append
router.put('/:id', async (req, res) => {
    try {
        const userTimeOff = await Time_off.update(
            {
                start_time: req.body.start_time,
                end_time: req.body.end_time,
                approval: req.body.approval,
                emp_id: req.body.emp_id,
                hours_used: req.body.hours_used
            },
            {
                where: {
                    id: req.params.id
                },
            })
        res.status(200).json(userTimeOff)
    } catch (err) {
        res.status(500).json(err)
    };
});

module.exports = router;