import React from "react"
import {Link} from 'react-router-dom'

const Soda = () => {
    return (
        <>
            <h1>Yay soda!</h1>
            <button>
                <Link to='/'>Back</Link>
            </button>
        </>
    )
}

export default Soda