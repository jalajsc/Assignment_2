import React,{useState,useEffect} from "react"
import axios from "axios"

function Details(){

    const [Details, setDetails] = useState(null);

    const fetchDet = async () =>{
        let urlQuery = new URLSearchParams(window.location.search);

        let result = await axios.get("http://mockrestapi.herokuapp.com/api/employee/"+urlQuery.get("id"));
        setDetails(result.data.data);
        console.log(result.data.data);
    };

    useEffect(()=>{
        fetchDet();
    },[]);

    return (
        <div>
            <h1>Details</h1>
            {Details != null?
            <div>
                <div>Name: {Details.name}</div>
                <div>Age: {Details.age}</div>
                <div>Country: {Details.country}</div>
                <div>DOB: {Details.dob}</div>
                <div>Phone: {Details.phone}</div>
                <div>About: {Details.about}</div>
            </div>:"Loading.."}
        </div>
    )
}

export default Details