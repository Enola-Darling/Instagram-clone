import "./Stories.css";
import { useEffect, useState } from "react";
import Story from "../story";
import ModalStories from "../ModalStories";
import Post from "../post";



const Stories = ({stories, Post}) => {
const [isModalOpen, setIsModalOpen] = useState(false);


  const openModalStories = () => {;
    setIsModalOpen(!isModalOpen);
  };

    return(
      <>
           <div className="Stories">
            <ul className="Stories__List">
        {stories &&
          stories.map((story) => (
            <li className="Stories__Item" key={story.id} onClick={() => openModalStories()}>
              <Story story={story} />
            </li>
          ))}
      </ul>
        </div>
        <ModalStories Post={stories} isOpen={isModalOpen} togle={setIsModalOpen}/>
      </>
   
    );
};

export default Stories