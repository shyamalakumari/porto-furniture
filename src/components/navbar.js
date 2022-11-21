
import React from 'react';
import styles from '../styles/header.css';
import {Input} from "antd";
import { SearchOutlined  } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { ShoppingOutlined  } from '@ant-design/icons';

const Navbar = () => {

return(

  <div className='main'>
  <div className='div'>
 
  <div className='search'>
  
  <Input className='inp' placeholder="search..."  suffix={<SearchOutlined/>}/>
{/* <SearchOutlined className='SearchOutlined'/> */}
</div>
  <div className='dropdown'>
      <select style={{marginLeft:"20rem"}}>
          <option>USD</option>
          <option>EUR</option>
          <option>USD</option> 
      </select>
  </div>
  <div className='dropdown'>
      <select>
          <option>ENG</option>
          <option>FRA</option>
      
      </select>


  </div>
  <p className='navv' >About Us</p>
  <p className='navv'>Contact Us</p>
  <p className='navv'>Login</p>
  <div className='icons'><UserOutlined /></div>
 <div className='icons'><HeartOutlined /></div>
 <div className='icons'><ShoppingOutlined /></div>
 
  </div>
  
  </div>
  
)

}
export default Navbar;