const cp=require('child_process');
const express=require('express');
const app=express();
const cors=require('cors');
const port=5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/',(req,res)=>{
    const orgName=req.body.orgName;
    console.log(orgName);
    cp.exec(`python3 ./backend.py ${orgName}`,(err,stdout,stderr)=>{
        if(err){
            console.log(err);
            res.send("Error");
        }
        else{
            console.log(stdout);
            res.send(stdout);
        }
    })
}
)
app.listen(port,()=>{

    console.log(`Server running at port ${port}`);
}
)