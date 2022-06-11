import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios';
import {BrowserRouter, useNavigate} from "react-router-dom";

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

    const [Del,setDel] = useState([])
    const handleDelete = async (e) => {
                    let Delete = await axios.delete('http://mockrestapi.herokuapp.com/api/employee/'+e) 
                  
                    console.warn(Delete.data.data)


    }

    useEffect(()=>{
        handleDelete()
    },[])
        return(
            <div className="Demo">
                    <h1>Data List</h1>
                    <Table className="tb">
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Address</td>
                            <td>age</td>
                            <td>country</td>

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