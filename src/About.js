import Dough from './img/dough.png'
import Cake from './img/macaroncake.jpg'

const About = () =>{
    
    return(
        <div className="about">
            <div className="about-banner">
                <img src={Dough} alt="banner" width="100%"/>
                <div className="text">
                    <p id="title-text">ABOUT SMITTY'S</p>
                    <p id="desc">lorem ipsum dolor sit amet</p>
                </div>
            </div>
            
            <div className="container">
                <div className="content">
                    <img id="cake" src={Cake} alt="cake"/>
  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua</p>
                </div>
                    
                <div id="content2" className="content" >
                    <img id="cake" src={Cake} alt="cake"/>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua</p>
                </div>
            </div>
        </div>

    );
}

export default About;