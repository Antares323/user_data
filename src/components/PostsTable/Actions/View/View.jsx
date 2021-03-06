import React from 'react'
import { Link } from 'react-router-dom'

const View = (props) => {    
    const title = props.location.state.title
    const text = props.location.state.text

    return (
        <>
            <h2>Info of this post</h2>
            <h3>{title}</h3>
            <p>{text}</p>
            <Link to='/'>Home page</Link>
        </>
    )
}

export default View