import React, { useState, useRef } from 'react';
import './styles/App.css'
import PostList from './PostList';
import Postform from './components/PostForm';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'javascript', body: 'Description' },
    {
      id: 2, title: 'java', body: 'Description'
    },
    { id: 3, title: 'python', body: 'Description' }]);



  const creatPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  return (
    <div className='App' >
      <Postform create={creatPost} />
      <PostList posts={posts} title='postList1' />
    </div>
  );
}


export default App;
