import React from 'react'

const Project = ({ images = [], interval = 3000, name }) => {

    const [thumbnails, setThumnails] = React.useState([]);
    const [previousSlideStyle, setPreviousSlideStyle] = React.useState({});
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [nextSlideStyle, setNextSlideStyle] = React.useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = React.useState({});

    React.useEffect(() => {
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + images[currentSlide] + "')"
        });

        if (currentSlide > 0) {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[currentSlide - 1] + "')"
            });
        } else {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[images.length - 1] + "')"
            });
        }

        if (currentSlide === images.length - 1) {
            setNextSlideStyle({
                backgroundImage: "url('" + images[0] + "')"
            });
        } else {
            setNextSlideStyle({
                backgroundImage: "url('" + images[currentSlide + 1] + "')"
            });
        }

        const loop = setInterval(() => {
            if (currentSlide === images.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, interval);
        return () => clearInterval(loop);
    }, [images, currentSlide, interval]);

    function previous() {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(thumbnails.length - 1);
        }
    }

    function next() {
        if (currentSlide === thumbnails.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    return (
        <div className="project-container" id="project">
            <h1> {name} </h1>
            <div className="project">
                <button onClick={previous} className="navbutton previousbutton" type="submit">Prev</button>
                <div style={previousSlideStyle} className="previous" />
                <div style={currentSlideStyle} className="main" >
                    <section className="text-box">
                        <a href=" "><h2> Source Code</h2></a>
                        <a href=" "><h2>Run Live</h2></a>
                    </section>
                </div>
                <div style={nextSlideStyle} className="next" />
                <button onClick={next} className="navbutton nextbutton" type="submit">Next</button>
            </div>
        </div>
    )
}

export default Project
