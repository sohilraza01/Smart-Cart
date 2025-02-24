import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';
import { useState } from 'react';
const AddProduct = () => {

    const [image,setImage] = useState(false);
    const [productDetailes,setProductDeailes] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:''
    })
    const changeHandler = (e) =>{
        setProductDeailes({...productDetailes, [e.target.name]:e.target.value})
    }


    const imageHandler = (e) =>{
       setImage(e.target.files[0]);
    }

    const Add_Product = async() =>{
        console.log(productDetailes);
        let responseData;
        let product = productDetailes;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((res)=>res.json()).then((data)=>{responseData=data})

        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{ 
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            })
            .then((res)=>res.json())
            .then((data)=>{
                data.success ? alert('Product Added'): alert('Failed !');
            })
            .catch((err)=>{
                console.log(err.message);
            })
        }
    }

    return ( 
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetailes.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetailes.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetailes.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
                </div>
            </div>
             <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetailes.category} onChange={changeHandler} name="category" className='add-product-selector' >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>       
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                <img  src={image?URL.createObjectURL(image):upload_area} alt=""  className='addproduct-thumnail-img'/>
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
            </div>
            <button onClick={()=>{Add_Product()}} className="addproduct-btn">ADD</button>
        </div>
     );
}
 
export default AddProduct;