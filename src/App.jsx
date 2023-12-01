import React from 'react'
import { useState } from 'react';
import { storage } from './config/firebase';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import axios from 'axios';

export default function App() {
    // upload image
    const [imageUpload,setImageUpload]= useState(null);
    const [urlImage,setUrlImage]= useState(null);

    const [productName,setProductName] = useState([])
    const changeImage=(e)=>{
        let file = e.target.files[0];
        setImageUpload(file)
    }
    const handleSave=()=>{
        if(imageUpload == null ) return;
        const imageRef = ref(storage,`iamges/${imageUpload.name}`);
        uploadBytes(imageRef,imageUpload).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((url)=>{
                console.log(url);
                setUrlImage(url);
                let product={
                    name:productName,
                    image: url,
                }
                axios.post("http://localhost:8002/product",product);
            })
        })
    }


  return (
   <>
        <h1>firebase</h1>
        <label htmlFor=""> Name</label>
        <input onChange={(e)=>setProductName(e.target.value)} type="text" /><br />
        
        <label htmlFor="">Image</label>
        <input
         onChange={changeImage}
         type="file" /> 
        <button onClick={handleSave}>Save</button>
        <img src={urlImage} alt="" style={{width:"200px"}}/>
   </>
  )
}
