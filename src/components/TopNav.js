import React from 'react'

const TopNav = () => {
    return (
        <div>
            <div className="navbar">
                    <ul className="container">
                        <li className="header">
                            <h1>Portfolio</h1>
                        </li>
                        <ul className="nav-icons">
                        <li>
                            <a href=" ">Home</a>
                        </li>
                        <li>
                            <a href="#project">Projects</a>
                        </li>
                        <li>
                            <a href=" ">Resume</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href=" ">About</a>
                        </li>
                        </ul>
                    </ul>
            </div>
        </div>
    )
}

export default TopNav
