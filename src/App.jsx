import { useState } from 'react';
import './App.css'

import { storiesData } from './mocks/stories';
import { userData } from './mocks/user';
import {postsData} from "./mocks/posts"


import TopBar from './components/topBar';
import Stories from './components/stories';
import Posts from './components/posts';


function App() {
 const [stories, setStories] = useState(storiesData);
 const [posts, setPosts] = useState(postsData);
  console.log(posts);
  return (
    <>  
    <TopBar/>
    <Stories stories = {stories}/>
    <Posts posts = {posts}/>
    
    </>
  )
}

export default App
