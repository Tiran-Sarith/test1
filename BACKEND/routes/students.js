const router = require("express").Router();
let Student = require("../models/student");
//teacher knk student knk add krna wkt adala route eka ****************

//crud 4ta adalama routes 4 hdagnne methanin

//create ekata router eka hdagamu

//http://localhost:6070/student/add

router.route("/add").post((req,res)=>{
    //meka body eka. eka athule tyna ewa thma execute wennh
    const age = Number(req.body.age);
    const name=req.body.name;
    const gender = req.body.gender;
    const index = req.body.index;

    const newStudent = new Student({
        name,
        age,
        gender,
        index
    })
    newStudent.save().then(()=>{
        res.json("Student Added") //json format eken response ekk ywnwa
    }).catch((err)=>{
        console.log(err) //exceptional handeling krl tynnh
    })//me prpoerties wlta adalawa values database ekt pass krnwa me function eken // ehma unoth then mokd wenne kiyla thwa ekk danwa(promiss ekk)
})  //http request methos ekk data insert krnna

//add krpu studentlawa blagnn plwn route ek liynwa **************************

http://Localhost:6070/student
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
}) //data gnnwa database eken ekai get damme

//update route eka
http://Localhost:6070/student/update

//Async await functions - request ekadigta enkot anith ewa mul ekae wade iwr wenkn balagena innwa
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;//uda id namamai enn one
    const {name, age, gender, index} = req.body; //udata add krddi gttta wage dennat plwn

    const updateStudent = {
        name,
        age,
        gender,
        index
    }
    //await eka thama araka iwr wenkn meka nwattagena innh
    //NIC eken wage select krnwnm findOneAndUpdate denna
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
        res.status(200).send({status: "User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message})
    })

    
})
//delete krna eka
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Err with delete user", error:err.message});
    })
})

//fetch one user data
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    //email eken filter krnwnm findOne(email)
    const user = await Student.findById(userId).then((student)=>{
        res.status(200).send({status: "User fetched", student})
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status: "Error with get user", error: err.message})
    })
})
module.exports= router;