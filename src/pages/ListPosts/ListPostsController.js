import axios from 'axios'
import React, { useEffect,useState } from 'react'
import ListPostsView from './ListPostsView'

const ListPostsController = () => {

    const [blogData,setBlogData]=useState([])
    const[showModal,setShowModal]=useState(false)
    const[userPosts,setUserPosts]=useState([])  
    useEffect(()=>{
        axios.get("http://localhost:3030/post")
        .then((res)=>setBlogData(res.data));
    },[]);
  //modal ile alakali fonksiyonlar
  const showUserPost=((parametre)=>{
  setShowModal(!showModal)

 setUserPosts(blogData.filter((post)=> post.user==parametre))
  })
    return <ListPostsView blogData={blogData} showModal={showModal} showUserPost={showUserPost} userPosts={userPosts}/>;
};

export default ListPostsController
