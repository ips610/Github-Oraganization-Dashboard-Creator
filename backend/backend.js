const cp=require('child_process');
const express=require('express');
const app=express();
const cors=require('cors');
const yo=require('dotenv').config(
    {
        path:'./.env'
    }
);
const port=process.env.PORT || 5000;
const token=process.env.TOKEN;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/',(req,res)=>{
    const orgName=req.body.orgName;
    console.log(orgName);
    cp.exec('.\\env\\Scripts\\activate')
    cp.exec(`python3 ./backend.py ${orgName} ${token}`,(err,stdout,stderr)=>{
        if(err){
            console.log(err);
            res.send("Error");
        }
        else{
            console.log(stdout);
            res.send(stdout);
        }
    })
    cp.exec('deactivate');
}
)

app.get('/',(req,res)=>{
    res.send("Server is working");
}
),

app.listen(port,()=>{

    console.log(`Server running at port ${port}`);
}
)