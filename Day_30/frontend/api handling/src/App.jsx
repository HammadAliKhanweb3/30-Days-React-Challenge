import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
 useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(`/api/products?search=${search}`, {
          signal: controller.signal,
        });
        setProducts(response.data);
} catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError(true);
        } } finally {
        setLoading(false);      }};
    if (search) {
      fetchData();}
      return () => {
      controller.abort();
    };
  }, [search]);
   return (
    <>
      <h1>API in React</h1>
      <input
        type="text"
        placeholder="search"
        value={search}
      onChange={(e) => setSearch(e.target.value)}    />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something Went Wrong</h1>}
      <h2>Number of products: {products.length}</h2></> );}
export default App;


