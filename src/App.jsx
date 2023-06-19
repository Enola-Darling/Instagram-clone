// import { useState } from 'react'
import './App.css'
import Stories from './components/stories';
import TopBar from './components/topBar';
// import Stories from "./components/stories"



function App() {
  // const [stories, setStories] = useState(storiesData);

  return (
    <>  
      <TopBar/>
     <Stories/>
      
    </>
  )
}

export default App
