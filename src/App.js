import "./App.css";
import Header from "./app/component/Header";
import Listing from "./app/component/listing";
import Paginations from "./app/component/Paginations";
import AddLoginModal from "./app/component/AddLoginModal";
import Footer from "./app/component/Footer";
import axios from "axios";
import SearchFilter from "./app/component/SearchFilter";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/api/products");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //modal show
  //const modalShow1 = () => setModalShow(false);
  //useState needs to be imported to set a boolean values for modal to open and close. Initially, modalIsOpen is set to false.
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
        {/*  Header Component  */}
            <Header />
        {/* modal Component   */}
      <AddLoginModal show={modalIsOpen} setModalIsOpenToFalse={setModalIsOpenToFalse} />
         {/*  Search Filter Component */}
       <SearchFilter />

      {/* PLP  */}
      <Listing posts={currentPosts} loading={loading} setModalIsOpenToTrue={setModalIsOpenToTrue} />
         {/* pagination Component   */}
      <Paginations
        postsPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
         {/* Footer  */}
       <Footer />
    </div>
  );
}
export default App;
