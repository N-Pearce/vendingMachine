import React from "react"
import {Link} from 'react-router-dom'

const VendingMachine = () => {
    return (
        <>
            <h1>Select a Snack</h1>
            
            <ul className="NavBar">
                <li>
                    <Link to='/cookies'>
                        Cookies
                    </Link>
                </li>
                <li>
                    <Link to='/chips'>
                        Chips
                    </Link>
                </li>
                <li>
                    <Link to='/soda'>
                        Soda
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default VendingMachine