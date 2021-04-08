import React from 'react'

const Landing = (props) => {
    return (
        <div className='landing'>
            <div className="typewriter">
                <h1>{ props.firstValue }</h1>
                <h2>{ props.secondValue }</h2>
            </div>
        </div>
    )
}

export default Landing
