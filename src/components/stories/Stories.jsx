import "./Stories.css";
import { useEffect, useState } from "react";
import Story from "../story";
import ModalStories from "../ModalStories";


const Stories = ({ stories, posts }) => {
  const [storyStart, setStoryStart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalStories = (index) => {
    setStoryStart(index);
    setIsModalOpen(true);
    
  };

  useEffect(() => {
    setStoryStart(storyStart !== false ? storyStart : false);
  }, [storyStart]);


  const closeModalStories = () => {
    setIsModalOpen(false);
    setStoryStart(false);
  };

  return (
    <>
      <div className="Stories">
        <ul className="Stories__List">
          {stories &&
            stories.map((story, index) => (
              <li
                className="Stories__Item"
                key={story.id}
                onClick={() => 
                  openModalStories(index)}
              >
                <Story story={story} />
              </li>
            ))}
        </ul>
      </div>
      {storyStart !== false && (
         <ModalStories
         posts={posts}
         isOpen={isModalOpen}
         closeModal={closeModalStories}
         index = {storyStart}
       />
      )}
    </>
  );
};

export default Stories