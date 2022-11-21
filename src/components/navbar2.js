import logo from '../media/logo-black.png';

import styles from '../styles/header.css';

const Navbarr = () =>{
    return(
     


<div className='navbar'>
    <div className='head'>
        
  <div className='bar'>HOME</div>
    <div className='items'>
        {/* <select className='select'>
            
            <option>CATEGORIES</option>
            <option>VARIATION 1</option>
            <option>FULLWIDTH BANNER</option>
            <option>BOXED SLIDER BANNER</option>
            <option>BOXED IMAGE BANNER</option>
            <option>LEFT SIDEBAR</option>
            <option>RIGHT SIDEBAR</option>
            <option>OFF-CANVAS FILTER</option>
            <option>HORIZONTAL FILTER1</option>
            <option>HORIZONTAL FILTER2</option> 


             <option>VARIATION 2</option>
           
            <option>LIST TYPES</option>
            <option>AJAX INFINITE SCROLL</option>
            <option>3 COLUMNS PRODUCTS</option>
            <option>4 COLUMNS PRODUCTS</option>
            <option>5 COLUMNS PRODUCTS</option>
            <option>6 COLUMNS PRODUCTS</option>
            <option>7 COLUMNS PRODUCTS</option>
            <option>8 COLUMNS PRODUCTS</option>

            
            <option><img className='imgg' src={logo1}/></option>
            
        </select>
   */}
  {/* <select>
    <option>PRODUCTS</option>
    <option>SIMPLE PRODUCT</option>
    <option>VARIABLE PRODUCT</option>

  </select> */}

    </div>
    <div className='nav' >CATEGORIES</div>
    <div className='nav'>PRODUCTS</div>
    <div className='nav'>PAGES</div>
    <div ><img className='imgg' src={logo}/></div>
    <div className='nav'>ABOUT US</div>
    <div className='nav'>CONTACT US</div>
    <div className='nav'>BUY PORTO!</div> 
    </div>
   
    </div>




    )
}
export default Navbarr;











