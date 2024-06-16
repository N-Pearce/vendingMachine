import React from "react"
import {Link} from 'react-router-dom'

const Cookies = () => {
    return (
        <>
            <h1>Yay cookies!</h1>
            <button>
                <Link to='/'>Back</Link>
            </button>
        </>
    )
}

export default Cookies