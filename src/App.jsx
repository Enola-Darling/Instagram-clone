import { useState } from 'react';
import './App.css'

import { storiesData } from './mocks/stories';
import { userData } from './mocks/user';
import {postsData} from "./mocks/posts"


import TopBar from './components/topBar';
import Stories from './components/stories';
import Posts from './components/post';


function App() {
 const [stories, setStories] = useState(storiesData);
 const [posts, setPosts] = useState(postsData);

  return (
    <>  
    <TopBar/>
    <Stories stories = {stories}/>
    <Posts posts = {posts}/>
    
    </>
  )
}

export default App
