import React from 'react'

export default function Contact() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }


    const handleSubmit = (e) => {
        console.log(`Name : ${name}\nEmail : ${email}\nMessage: ${message}`);
        e.preventDefault();
    }

    return (
        <div className="contact-container" id="contact">

            <div className="left-col"></div>

            <div className="right-col">
                <form className="contact-form" method="post" onSubmit={handleSubmit}>
                    <h1 className="heading">Contact Me</h1>
                    <label>
                        <input
                            type="text"
                            className="name"
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleName}
                            value={name}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="email"
                            className="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleEmail}
                            value={email}
                            required
                        />
                    </label>
                    <label>
                        <textarea
                            rows="6"
                            placeholder="Your Message"
                            className="message"
                            name="message"
                            onChange={handleMessage}
                            value={message}
                        >
                        </textarea>
                    </label>
                    <button type="submit" className="submit" name="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}