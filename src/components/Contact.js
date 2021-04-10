import React from 'react'
import DeskImage from '../../src/assets/DeskSide.jpg'

export default function Contact() {
    return (
        <div className="main-container" id="contact">
            <div className="first">
                <img
                    src={DeskImage}
                    alt="contactfrom"
                />
            </div>
            <div className="second">
                
                <h1 
                className="contact-title"
                style={{ 
                    textAlign: "center",
                    color: "black",
                    fontSize: "50px"
                }}
                >
                    Contact Me
                </h1>
                
                <form>

                    <label>Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="name"
                        placeholder="Your name.."
                    />

                    <label>E-Mail Id</label>
                    <input
                        type="text"
                        id="lname"
                        name="email"
                        placeholder="Your email id.."
                    />

                    <label>Message</label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                    ></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}