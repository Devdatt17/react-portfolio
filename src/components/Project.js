import React from 'react'

const Project = ({images=[], interval=3000,name}) => {

    const [thumbnails, setThumnails] = React.useState([]);
    const [previousSlideStyle, setPreviousSlideStyle] = React.useState({});
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [nextSlideStyle, setNextSlideStyle] = React.useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = React.useState({});

    React.useEffect(()=>{
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')"
        });

        if(currentSlide>0){
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[currentSlide-1]+"')"
            });
        }else{
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[images.length-1]+"')"
            });
        }

        if(currentSlide === images.length-1){
            setNextSlideStyle({
                backgroundImage: "url('"+images[0]+"')"
            });
        }else{
            setNextSlideStyle({
                backgroundImage: "url('"+images[currentSlide+1]+"')"
            });
        } 

        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop); 
    }, [images, currentSlide, interval]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(thumbnails.length-1);
        }
    }

    function next(){
        if(currentSlide === thumbnails.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }

    return (
        <div className="project-page" id="project">
            <h2>{name}</h2>
            <section className="slideshow">
            <div className="slide-holder">
                <section className="slide previous-slide">
                    <div style={previousSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail">
                            <section className="text-box">
                                <span>
                                    <a href=" "><h2> Source Code</h2></a>
                                </span>
                                <span>
                                    <a href=" "><h2>Run Live</h2></a>
                                </span>

                            </section>
                    </div>
                </section>
                <section className="slide next-slide">
                    <div style={nextSlideStyle} className="slide-thumbnail"></div>
                </section>
            </div>

            <div className="slideshow-controller">
                <span onClick={previous}> { '<<<' }  </span>
                <span onClick={next}> {'>>>'} </span>
            </div>
            <br/>
            <button type="submit" style={{
                width:'100%',
                backgroundImage:'linear-gradient(#f5c9f5,#fcacfc)',
                height:'60px',
                borderRadius:"10px",
                fontSize:'17px',
                textAlign:"center"
            }}>
                <h3>View all projects</h3>
            </button>
        </section>
        </div>
    )
}

export default Project
