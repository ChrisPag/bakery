import Navbar from './Navbar';
import PastelBanner from './img/pastel-banner.jpg';

const Home = () => {

    return(
        <div className="home">
            <Navbar />
            <img src={PastelBanner} width="100%"></img>
            <div className="img-content">
                <p>Try our <br />cupcakes</p>
                <button>Order Now</button>
            </div>

        </div>
    );
}

export default Home;