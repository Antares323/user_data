import React from 'react'
import { useLocation, useParams } from 'react-router'
import { Media } from 'reactstrap'

const View = (props) => {
    const location = useLocation()
    console.log(location)

    const viewData = () => {
        <div>
            <h1>{location}</h1>
        </div>
    }
    
    return (
        <Media
            onClick={() => {viewData()}} 
            object
            src='/img/view-icon.png'
        />
    )
}

export default View