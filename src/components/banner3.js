
import banner from "../media/banner-3.jpg";
import bannerr from "../media/banner-4.jpg"
import "../styles/header.css";

const Banner3 =() =>{
    return(
        <div><h4 className="deals">OFFERS AND DEALS</h4>
            <div className="off">
            <div className="ban3">
                <img className="bann" src={banner}/>
                {/* <p className="banno1">Exclusive Shoes</p>
                <p className="bann2">50% OFF</p>
                <p className="bann3"> SHOP NOW</p> */}
                </div>
            <div className="ban4">
            <img src={bannerr}/>
            <p className="amazing">AMAZING</p>

            <p className="collec">COLLECTION</p>
          <div className="checkk"> <p className="check">CHECK OUR DISCOUNTS</p></div>
            <p className="shop">SHOP NOW</p>
            </div>
        </div>
        </div>
    )
}
export default Banner3 ;