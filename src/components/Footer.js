import React from 'react'

const Footer = () => {
    return (
        <div className='footer' id="contact">
            <h2>Connect With Me On</h2>
            <div className="footer-main">
                <div className="footer-content">

                    <div className="cards">
                        <p> <a href=" "> <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="socialmedia"/></a>  <hr/> Github</p>
                        <p> <a href=" "> <img src="https://icon-library.com/images/instagram-small-icon/instagram-small-icon-12.jpg" alt="socialmedia"/> </a>  <hr/> Instagram</p>
                        <p> <a href=" "> <img src="https://icons-for-free.com/iconfiles/png/512/social+tweet+twitter+icon-1320192294140475236.png" alt="socialmedia"/> </a> <hr/> Twitter</p>
                    </div>

                    <div className="cards cards-nav">
                        <p> <a href=" ">Home</a></p>
                        <p> <a href="project">Projects</a></p>
                        <p> <a href=" ">Contact</a></p>
                        <p> <a href=" ">About</a></p>
                        <p> <a href=" ">Resume</a></p>
                    </div>

                </div>
            </div>
            <div className="min-footer">
                <h4>Designed By :  Devdatt Pandit </h4>
            </div>
        </div>
    )
}

export default Footer
