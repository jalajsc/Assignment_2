import React, {useState,useEffect} from 'react'
import { Table} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import Popup from "reactjs-popup";

function APIDemo()
{
    const [data,setData] = useState([])
    const navigate=useNavigate();

 
    useEffect(()=>{
        fetchData();
    },[])

    const [q,setQ] = useState([])
    function page(w){
        setQ(w)
        return (w)
    }

    const handleDelete = async (e) => {
                    let Delete = await axios.delete('https://mockrestapi.herokuapp.com/api/employee/'+e) 
                    .then(response =>{
                        if(response.data != null){
                            alert("delete successfull..")
                            fetchData();
                        }
                        console.warn(Delete);

                    })

    }

    async function fetchData() {
        let result = await axios.get(`https://mockrestapi.herokuapp.com/api/employee?pageNo=${q}&limit=5`);
        setData(result.data.data)
        console.warn(result.data.data)
    }

        return(
            <div className="Demo">
                    <h1>Data List</h1>
                    <Table className="tb">
                        <tr id="T">
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

                    <div className="Pagination">

                        <ul>
                            <li id='PaginationP'>PageNo. - </li>
                            <li onClick={() =>{page(1)}}>1</li>
                            <li onClick={() =>{page(2)}}>2</li>
                            <li onClick={() =>{page(3)}}>3</li>
                            <li onClick={() =>{page(4)}}>4</li>
                            <li onClick={() =>{page(5)}}>5</li>
                            <li onClick={() =>{page(6)}}>6</li>
                        </ul>
                    </div>

            </div>
        )
}

export default APIDemo