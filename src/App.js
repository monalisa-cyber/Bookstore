import "./App.css";
import Header from "./app/component/Header";
import Listing from "./app/component/listing";
import AddLoginModal from "./app/component/AddLoginModal";
import Footer from "./app/component/Footer";
import axios from "axios";
import SearchFilter from "./app/component/SearchFilter";
import React, { useState, useEffect } from "react";
 

function App() {
  
  const [posts, setPosts] = useState([]);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchPosts = async () => {
    
      const res = await axios.get("https://salty-taiga-93281.herokuapp.com/api/products");
      setPosts(res.data);

    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
        {/*  Header Component  */}
            <Header />
        {/* modal Component   */}
      <AddLoginModal show={modalIsOpen} setModalIsOpenToFalse={setModalIsOpenToFalse} />
         {/*  Search Filter Component */}
       <SearchFilter posts={posts} setModalIsOpenToTrue={setModalIsOpenToTrue} />

      {/* PLP  */}
      <Listing posts={posts}  setModalIsOpenToTrue={setModalIsOpenToTrue}  />
     
         {/* Footer  */}
       <Footer />
    </div>
  );
}
export default App;
