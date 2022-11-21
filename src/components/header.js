import React,{useState} from "react";
import { Carousel,DatePicker,Input } from 'antd';
import {EnvironmentOutlined,AimOutlined,ContactsOutlined} from '@ant-design/icons';
import styles from '../styles/header.module.scss';

const {RangePicker} = DatePicker;
const Header = () =>{
    const [room,setRoom] =useState(0);
    const [guest,setGuest] =useState(0);
    return(
        <>
        <div className={styles.carousel}>
        
        <Carousel >
     
      
        <div className={styles.imgContainer}>
        <p>100% secure payment</p>
       {/* <p >free shipping on orders over $99</p>
       <p>upto 40% OFF on selected items</p>
         */}
        </div>
        <div className={styles.imgContainer}>
        <p>free shipping on orders over $99</p>
      
          
        </div>
        <div className={styles.imgContainer}>
       <p>upto 40% OFF on selected items</p>
          
      </div>
      <div className={styles.imgContainer}>
       <p>100% secure payment</p>
        </div>
        <div className={styles.imgContainer}>
        <p>free shipping on orders over $99</p>
          
        </div>
        <div className={styles.imgContainer}>
       <p>upto 40% OFF on selected items</p>
          
      </div>
      
      </Carousel>
      
      
        </div>
        
      </>
    )
}
export default Header;