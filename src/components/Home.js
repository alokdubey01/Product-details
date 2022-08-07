import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get("http://localhost:4000/products")
      .then(({data} => setProducts(data)) }, []);

  return (
    <>
    {products.map((item, index) => (
      <div key="index">
        <h1>{item.name}</h1>
        <button onclick=((e)=> {navigate(`product/${item._id}`})> Product Details </button>
      </div>
    ))}
    </>
  );
}
