
import "../styles/header.css";
import img from "../media/banner-5.png";
import { Input, Space } from 'antd';

const Banner5 = () => {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    return(
<div>
    <img className="sub" src={img}/>
    <div className="sub1">Subscribe To Our Newsletter</div>
    <div className="sub2">Get all the latest information on events, sales and offers.</div>
    <div className="search1">
    <Search 
      placeholder="Email adress"
      allowClear
      enterButton="SUBSCRIBE" 
      size="large"
      onSearch={onSearch}
    /></div>
</div>
    )
}

export default Banner5;