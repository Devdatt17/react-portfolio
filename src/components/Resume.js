import React from 'react'

const Resume = () => {
    return (
        <div className='resume-container'>
            <h1>Welcome to my Resume</h1>

            <div className="resume-doc">
                <div className="resume-header">

                    <div className="resume-image"></div>

                    <div className="resume-description">
                        <h1>Devdatt Pandit</h1>
                        <p>Strong in design and integration with intuitive problem-solving skills.
                        Passionate about implementing and launching new projects. Ability to
                        translate business requirements into technical solutions. Looking to start
                        the career as an entry-level software engineer with a reputed firm driven
                        by technology.
                        </p>
                    </div>
                </div>
                <div className="resume-main">

                    <div className="certificate-section">
                        <h1>Education</h1>
                        <div>
                            <h2>SGGS Institute of Engineering and Technology Nanded</h2>
                            <p>2017-2021</p>
                        </div>
                        <div>
                            <h2>Yeshwant College Nanded</h2>
                            <p>2016-2017</p>
                        </div>
                        <div>
                            <h2>Sandeepani Public School Nanded</h2>
                            <p>2014-2015</p>
                        </div>

                        <br />

                        <h1>Projects</h1>

                        <div>
                            <h2>Movies Search Website</h2>
                            <p className="resume-project-intro">Movies Search Website is a website where users
                            can search movies and get information regarding
                            movies like summary, movie type, and reviews.
                            </p>
                            <h3>Technologies : ReactJS , TMDB API</h3>
                        </div>
                        <div>
                            <h2>Notes App</h2>
                            <p className="resume-project-intro">
                                Notes App is a website where users can write
                                daily notes and keep track of their work. Users
                                can also use the markdown syntax inside the
                                notes.
                            </p>
                            <h3>Technologies : ReactJS, React-Markdown</h3>
                        </div>

                        <br />

                        <h1>Certificates</h1>

                        <div className="certificates">
                            <div>
                                <h2>Software Engineering Virtual Experience</h2>
                                <p className="certificate-about">JP Morgan Chase and Co.</p>
                            </div>
                            <div>
                                <h2>Software Developer Recomendation Certificate</h2>
                                <p className="certificate-about">Aspiring Minds</p>
                            </div>
                        </div>
                    </div>


                    <div className="skills-section">
                        <div>
                            <h1>Technical Skills</h1>
                            <div>
                                <div className="skills">
                                    <h2>C</h2>
                                    <h2>C++</h2>
                                    <h2>Java</h2>
                                    <h2>HTML</h2>
                                    <h2>CSS</h2>
                                    <h2>Javascript</h2>
                                    <h2>My SQL</h2>
                                    <h2>MongoDB</h2>
                                    <h2>React JS</h2>
                                    <h2>PHP</h2>
                                </div>
                                <div className="charts">
                                    <div>
                                        <div className="bar b1"></div>
                                        <div className="darkbar d1"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b2"></div>
                                        <div className="darkbar d2"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b3"></div>
                                        <div className="darkbar d3"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b4"></div>
                                        <div className="darkbar d4"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b5"></div>
                                        <div className="darkbar d5"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b6"></div>
                                        <div className="darkbar d6"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b7"></div>
                                        <div className="darkbar d7"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b8"></div>
                                        <div className="darkbar d8"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b9"></div>
                                        <div className="darkbar d9"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b10"></div>
                                        <div className="darkbar d10"></div>
                                    </div>
                                </div>
                            </div>
                            <h1>Tools</h1>
                            <div>
                                <div className="skills">
                                    <h2>VSCode</h2>
                                    <h2>Git</h2>
                                </div>
                                <div className="charts">
                                    <div>
                                        <div className="bar b11"></div>
                                        <div className="darkbar d11"></div>
                                    </div>
                                    <br />
                                    <div>
                                        <div className="bar b12"></div>
                                        <div className="darkbar d12"></div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resume
