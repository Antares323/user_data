import React from 'react'
import { useLocation, useParams } from 'react-router'
import { Media } from 'reactstrap'

const View = (props) => {
    const location = useLocation()

    const viewData = () => {
        <div>
            <h1>{location.state.title}</h1>
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