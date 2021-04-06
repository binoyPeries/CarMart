 import ss1 from '../images/car1.jpg';
 import ss2 from '../images/car2.jpg';
 import ss3 from '../images/car3.jpg';
 import ss4 from '../images/car4.jpg';
 import {Link} from 'react-router-dom';


 import {useState, useEffect, useRef} from 'react';
const delay = 4000;
const images = [ss2,ss1,ss3,ss4];


const Home = () => {
    return ( 
       <div className="" >
            <SlideShow/>
            <div className="d-flex justify-content-center ">
                <h1 style={{marginTop:'15px'}}> Something for Everyone</h1>
            </div>
            <div className="d-flex justify-content-center ">
                <h6 > See our full lineup of vehicles and find the one that best fits you.</h6>
            </div>
            
            <div className="d-flex justify-content-center " style={{margin:"15px"}}>
                <Link to='/market'>
                    <button className="home-btn btn btn-primary" >All Vehicles</button>
                </Link>
            </div>


       </div>

       
     );
}
 



function SlideShow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {
            resetTimeout();
        };
      }, [index]);
    return(
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {
                    images.map((img,i)=>(
                        <div className="slide" key={i}>
                            <img src={img} alt="" style={{width:'100%', maxHeight:"660px"}}/>
                        </div>
                    ))
                }
                
            </div>

            <div className="slideshowDots">
                {images.map((_, idx) => (
                <div 
                key={idx} 
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                    setIndex(idx);
                    }}
                ></div>
                ))}
            </div>
        </div>

    );
    
}
export default Home;