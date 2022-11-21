import React, { useEffect, useState } from 'react';
import "../styles/products.css"
import axios from 'axios';
import { HeartOutlined } from '@ant-design/icons';

const Products = () => {

    let [productsData, setProductsData] = useState("");

    const fetchData = async () => {
        try {

            const data = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789897/React%20Class/M.%20Shyamala/featured_hheist.json")
            console.log(data);
            setProductsData(data.data)
        } catch (error) {
            console.log(error);
        }



    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(productsData)



    return (
<div><h2 className='fea'>FEATURED PRODUCTS
</h2>
        <div className="imgContainer1" >
       
            {productsData && productsData.map(e => (
                <div >
                    
                      

                            <div >
                                <img className="image1" src={e.pictures[0].url} />
                              

                                <div className='heart'><p className="name">{e.name}</p>
                                <p className='heart'><HeartOutlined /></p></div>
                                <p className="name1"><strike>${e.price[1]}</strike> ${e.price[0]}</p>
                               
                            </div>
                        
                    
                    {/* <div>
                        <img src={e.pictures[1].url} className={style.image} />


                        <p className={style.name}>{e.name}</p>
                        <p className={style.name}><strike>${e.price[1]}</strike> ${e.price[0]}</p>
                    </div>
                    <div>
                        <img src={e.pictures[2].url} className={style.image} />


                        <p className={style.name}>{e.name}</p>
                        <p className={style.name}><strike>${e.price[1]}</strike> ${e.price[0]}</p>
                    </div> */}
                </div>


            ))}

</div>

        </div>

    )




}



export default Products;
