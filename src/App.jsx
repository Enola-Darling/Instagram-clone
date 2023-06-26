import { useEffect, useState } from "react";
import "./App.css";

import { storiesData } from "./mocks/stories";
import { postsData } from "./mocks/posts";

import TopBar from "./components/topBar";
import Stories from "./components/stories";
import Posts from "./components/posts";
import Camera from "./components/Camera/Camera";
import Chat from "./components/chat";

function App() {
  const [section, setSection] = useState("home");
  const [stories, setStories] = useState(storiesData);
  const [posts, setPosts] = useState([]);


  const url = "https://api.npoint.io/c59d0538fafba6432ffe";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          const modifiedData = data.map((p) => {
          const mediaSample =  p.media[0];
          if (mediaSample) {
              const n = Math.floor(Math.random() * 10);
              for (let i = p.media.length; i < n; i++) {
                p.media.push({
                  id: mediaSample.id + `-${i}`,
                  src: `https://picsum.photos/800/500?${Math.floor(Math.random() * 5000)}`
                });
              }
          }
          return p;
        });
        setPosts(modifiedData);
      });
  }, []);

  //   useEffect(() => {
  //     fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setStories(data));
  // }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "tv":
        return <h1>TV</h1>;
      case "messages":
        return <Chat/>;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />
      {onSectionRender()}
    </>
  );
}

export default App;
