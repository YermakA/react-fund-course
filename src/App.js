import React, { useState, useRef } from 'react';
import './styles/App.css'
import PostList from './PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'javascript', body: 'Description' },
    {
      id: 2, title: 'java', body: 'Description'
    },
    { id: 3, title: 'python', body: 'Description' }]);


  const [posts2, setPosts2] = useState([
    { id: 1, title: 'ruby', body: 'Description' },
    { id: 2, title: 'golang', body: 'Description' },
    { id: 3, title: 'python', body: 'Description' }]);

  const [title, setTitle] = useState('dsads');
  const bodyInputRef = useRef();

  const addNewPost = (e) => {

    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);

  }
  return (
    <div className='App' >
      <form>
        <MyInput
          value={title}
          onChange={e => { setTitle(e.target.value) }}
          type='text'

          placeholder='название поста'
        />

        <MyInput
          ref={bodyInputRef}
          type='text'
          placeholder='описание поста'
        />
        <MyButton onClick={addNewPost}>create post</MyButton>
      </form>
      <PostList posts={posts} title='postList1' />
      <PostList posts={posts2} title='postList2' />
    </div>
  );
}
export default App;
