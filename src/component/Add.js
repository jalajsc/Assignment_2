import React, {useState,useEffect} from "react"
import axios from "axios"

function StoreData(){

    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [country, setcountry] = useState("")
    const [age, setage] = useState("")
    const [dob, setdob] = useState("")
    const [address, setaddress] = useState("")


    const [State, setState] = useState([])
    const Add = async () =>{
        let item = {name,phone,email,country,age,dob,address}
        let result = await fetch('http://mockrestapi.herokuapp.com/api/employee',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result",result);
    }


    return (
        <div className="AddData">
            <h1>Store Data </h1>
            <div className="Box">Name:<input className="inputD" type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Name" /></div>
            <div className="Box">Phone Number: <input className="inputD" type="text" value={phone} onChange={(e)=>setphone(e.target.value)} placeholder="Enter Phone" /></div>
            <div className="Box">Email: <input className="inputD" type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email" /></div>
            <div className="Box">Country: <input className="inputD" type="text" value={country} onChange={(e)=>setcountry(e.target.value)} placeholder="Enter Country" /></div>
            <div className="Box">Age: <input className="inputD" type="text" value={age} onChange={(e)=>setage(e.target.value)} placeholder="Enter Age" /></div>
            <div className="Box">DOB: <input className="inputD" type="text" value={dob} onChange={(e)=>setdob(e.target.value)} placeholder="Enter Date of birth" /></div>
            <div className="Box">Address: <input className="inputD" type="text" value={address} onChange={(e)=>setaddress(e.target.value)} placeholder="Enter Address" /></div>
            <button onClick={Add} className="button">Add</button>
        </div>
    )
}

export default StoreData