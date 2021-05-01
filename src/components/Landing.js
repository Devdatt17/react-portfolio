import React from 'react'

const Landing = (props) => {
    return (
        <div className='landing' style={{ height: props.height +'vh' }}>
            <div className="typewriter">
                <h1>{ props.firstValue }</h1>
                <br />
                <h2>{ props.secondValue }</h2>
            </div>
        </div>
    )
}

export default Landing
