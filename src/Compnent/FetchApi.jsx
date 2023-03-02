import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './Api.css';
export default function FetchApi({changes}) {
    const[Data,setData]=useState([]);
    const FetchData=async()=>{
        await axios.get 
        (changes ? `https://saurav.tech/NewsAPI/top-headlines/category/${changes}/in.json`
        :`https://saurav.tech/NewsAPI/everything/cnn.json`)
        .then((res) =>setData(res.data.articles));
    };
    useEffect(()=>{
        FetchData();
    },[changes]);
  return (
    <div className='container-card'>
        
            {Data 
              ? Data.map((items)=>(
                <>
                <div className="con">
                     <div className="card">
                        <div className="card-img">
                          <img src={items.urlToImage} alt="Error not found"  height="300px"/>
                         </div>
                        <h2>{items.title}</h2>
                        <p>{items.description}</p>
                        <p >{items.content}</p>
                        <a   href={items.url} target="blank">Read More</a>
                   </div>
                  </div> 
                </>
              ))
            :"Loading"}
        
    </div>
  );
};
