import logo2 from '../media/banner-1.jpg';
import logo3 from '../media/banner-2.jpg';
import styles from "../styles/header.css"
const Banner = () => {
    return(
        <div className='ban'>
        <div> 
            <img className='image' src={logo2}/>
            </div>
            <div className='container'>
              <h3 className='find'>FIND A PRODUCT</h3>
          <div className='drp1'>
            <select className='opt'>
            <option >
             select a category
            </option>
            <option>
              Accessories
            </option>
            <option>Caps</option>
            <option>watches</option>
            <option>beauty</option>
            <option>decor</option>
            <option>Fashion</option>
            <option>shoes</option>
            <option>Footware</option>
            <option>Headphone</option>
             <option>Toys</option>
          </select>
          </div>

          <div className='drp2'>
            <select className='opt'>
                <option>By brand</option>
                <option>Adidas</option>
                <option>calvin klein</option>
                <option>Diesel</option>
                <option>Lacoste</option>
                
            </select>
          </div>
          <div> 
            <img className='imagg' src={logo3}/>
            
            </div>
            </div>

            </div>
    )
}

export default Banner;




