import cat from "../media/cat-1.jpg";
import catt from "../media/cat-2.jpg";
import cattt from "../media/cat-3.jpg";
import catttt from "../media/cat-4.jpg";
import cats from "../media/cat-5.jpg";
import catss from "../media/cat-6.jpg";

import "../styles/header.css";


const Banner2 = () =>{
    return(
        <div ><h2 className="categories">FEATURED CATEGORIES</h2>
       <div className="catimg">
        <div className="first">
     <div><button className="btn1">FASHION</button><img className="img1" src={cat}/></div>
     <div><button className="btn2">FURNITURE</button><img className="img2" src={catt}/></div>
     <div><button className="btn3">DECOR</button><img className="img3" src={cattt}/></div>
     </div>
     <div className="second">
     <div className="img4"><button className="btn4">ACCESSORIES</button><img className="img4" src={catttt}/></div>
     <div><button className="btn5">MOBILE</button><img className="img5" src={cats}/></div>
     <div><button className="btn6">FOOTWERE</button><img className="img6" src={catss}/></div>
    </div>
    </div>
       
    </div>
    )
}
export default Banner2;