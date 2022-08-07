import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Details() {
  const [product, setProduct] = useState([]);
  const {_id} = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost:4000/product/${_id}`)
      .then(({data}) => setProduct(data))}. []);

  return (
    <>
    {product.map((item, index) => (
      <div key="index">
          <img src={item.img} alt="product"/>
      </div>
    ))}
    </>
  );
}
