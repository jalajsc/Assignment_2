import React, {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate} from "react-router-dom";

function APIDemo()
{
    const [data,setData] = useState([])
    const navigate=useNavigate();

    const fetchUsers = async () =>{
        let result = await axios.get("http://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5")
        setData(result.data.data)
        console.warn(result.data.data)
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    const handleDelete = async (e) => {
                    let Delete = await axios.delete('http://mockrestapi.herokuapp.com/api/employee/'+e) 
                    .then(response =>{
                        if(response.data != null){
                            alert("delete successfull..")
                        }
                    })

    }
    useEffect(()=>{
        handleDelete()
    },[])

        return(
            <div className="Demo">
                    <h1>Data List</h1>
                    <Table className="tb">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>age</th>
                            <th>country</th>

                        </tr>
                        {
                        
                            data.map( (item) =>
                                <tr>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.age}</td>
                                    <td>{item.country}</td>
                                    <button className="dl_item" onClick={()=>{
                                        navigate('/Details?id='+item._id)
                                    }}>Info</button>
                                    <button onClick={() => {handleDelete(item._id)
                                    }
                                    }>Delete</button>
                                
                            </tr>
                            )
                        }
                    </Table>
                    <br />
                    <br />
            </div>
        )
}

export default APIDemo