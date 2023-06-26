import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./ModalStories.css";

function ModalStories({ isOpen, closeModal, posts, index }) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    setStart(index);
  }, [index]);

  return (
    <div className={`${isOpen ? "open" : ""} ModalStories`}>
      <div className="ModalStories__Close" onClick={() => closeModal()}>
        x
      </div>
      <div>
        <Swiper initialSlide={index} spaceBetween={0}>
          {posts &&
            posts?.map((userStories) => (
              <SwiperSlide key={userStories?.id}>
                <>
                  <div className="ModalStories__User">
                    <div className="ModalStories__image">
                      <img src={userStories?.userImage} alt="" />
                    </div>
                    <div className="ModalStories__UserName">
                      {userStories?.userName}
                    </div>
                  </div>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ type: "progressbar" }}
                  >
                    {userStories?.media?.map((story) => (
                      <SwiperSlide key={story?.id}>
                        <img src={story?.src} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ModalStories;
