import React, { useState } from 'react'
import { useLocation} from 'react-router'
import { Media } from 'reactstrap'

const View = (props) => {
    const location = useLocation()
    const [title, setTitle] = useState()

    // setTitle(location)

    const viewData = () => {
        {console.log(location)}
        <div>
            <h1>{location.pathname}</h1>
        </div>
    }
    
    return (
        <>
            <Media
                onClick={() => {viewData()}} 
                object
                src='/img/view-icon.png'
            />
            <h3>{title}</h3>
        </>
    )
}

export default View