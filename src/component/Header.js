import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <div className="header">
            <ul className="Header-ul">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/Demo" >Data List</Link></li>
                <li><Link to="/Add" >Add</Link></li>               
            </ul>
        </div>
    )
}

export default Header;