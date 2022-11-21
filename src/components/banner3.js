
import banner from "../media/banner-3.jpg";
import bannerr from "../media/banner-4.jpg"
import "../styles/header.css";

const Banner3 =() =>{
    return(
        <div><h4 className="deals">OFFERS AND DEALS</h4>
            <div className="off">
            <div className="iii"><img className="bann" src={banner}/></div>
            <img src={bannerr}/>
        </div>
        </div>
    )
}
export default Banner3 ;