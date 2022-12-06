const routerViews=require('../controllers/rolesController')
const router=require('express').Router()

//View Roles
router.post('/AddrolesDetails',routerViews.AddrolesDetails)

router.get('/getAllroles',routerViews.getAllroles)

router.put('/:rolesid',routerViews.updateroles)

//View Employees
router.post('/AddEmployeeDetails',routerViews.AddEmployeeDetails)

router.get('/:rolesid',routerViews.getEmployeeRoles)

module.exports = router