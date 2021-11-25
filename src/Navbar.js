import CupcakeIcon from './img/cupcake-icon.png';

const Navbar = () => {
    return(
        <div className="navbar">
            
            <img src={CupcakeIcon} alt="cupcake icon" height="50px" width="50px"></img>
            <div class="nav-links">
                
                <span id="logo-title">
                    Smitty's Sweets
                </span>
                
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Shop</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            
            </div>
        </div>
    );
}

export default Navbar;
