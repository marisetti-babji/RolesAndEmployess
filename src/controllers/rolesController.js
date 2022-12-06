const db=require('../models/index')

//Roles Controllers

//1.add roles
const AddrolesDetails = async (req,res)=>{

    let addData= {
        title:req.body.title,
    }

    const role = await db.roles.create(addData)
    res.status(200).send(role)
}
//2.update roles
const updateroles = async(req,res)=>{
    let rolesid=req.params.rolesid
    let role = await db.roles.update(req.body,{where :{rolesid:rolesid}})
    res.status(200).send(role)
}

//3.get all roles

const getAllroles = async (req,res)=>{
    let role = await db.roles.findAll({})
    res.status(200).send(role)
}








//Employee Controllers

//1.add employee Details
const AddEmployeeDetails = async (req,res)=>{

    let  addData= {

        Fname:req.body.Fname,
        Lname:req.body.Lname,
        Email:req.body.Email,
        rolesid:req.body.rolesid ? req.body.rolesid : false
    }

    const employees = await db.employee.create(addData)
    res.status(200).send(employees)
}

//2.get employeeRoles(both)
const getEmployeeRoles = async (req,res)=>{
    let rolesid=req.params.rolesid
    let data = await db.roles.findAll({
          attributes:['title'],
        include:[{
            model:'db.employee',
            attributes: ['Fname','Lname','Email'],
        }],
        where :{rolesid:rolesid}
    })
    res.status(200).send(data)
}


module.exports={
    AddrolesDetails,
    getAllroles,
    updateroles,
     
    
    AddEmployeeDetails,
    getEmployeeRoles
}



