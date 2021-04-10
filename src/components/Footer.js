import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <h2>Connect With Me On</h2>
            <div className="footer-main">
                <div className="footer-content">

                    <div className="cards">
                        <p> <a href=" "> <img className="footer-images" src="https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg" alt="socialmedia"/></a>  <br/> Github</p>
                        <p> <a href=" "> <img className="footer-images" src="https://icon-library.com/images/instagram-small-icon/instagram-small-icon-12.jpg" alt="socialmedia"/> </a> <br/> Instagram</p>
                        <p> <a href=" "> <img className="footer-images" src="https://icons-for-free.com/iconfiles/png/512/social+tweet+twitter+icon-1320192294140475236.png" alt="socialmedia"/> </a> <br/> Twitter</p>
                        <p> <a href=" "> <img className="footer-images" src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" alt="socialmedia"/> </a> <br/> LinkedIn</p>
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
