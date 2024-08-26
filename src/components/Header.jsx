import "./Header.scss"
import logo from "../assets/nba-logo.png"


const Header =()=>{
    return(
        <div className="headerContainer">
            <div className="nbaLogo">
                <img className="nbaLogoImg" src={logo} alt="" />
            </div>
            <div className="nbaHeadline">
                <h1 className="nbaHeadlineh1">NBA Legends</h1>
            </div>
            
        </div>
    )
}

export default Header;



// resim dosya yolunu görmüyor ?????????