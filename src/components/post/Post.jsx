import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./Post.css";

import { LikeIcon } from "../../icons";

const Post = ({ post }) => {
  const { isLike } = Post;
  const [like, setLike] = useState(isLike);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <article className="Post">
      <div className="PostTop">
        <div className="PostTop__User">
          <div className="User__Image">
            <img
              src={post?.userImage ? post?.userImage : ""}
              alt={post?.userName}
            />
          </div>
          <div className="User__Content">
            <p className="User__Username">{post?.userName}</p>
            <p className="User__Location">{post?.location}</p>
          </div>
        </div>
        <div className="PostTop__Actions"></div>
      </div>
      <div className="PostContent">
        <Swiper pagination={true} modules={[Pagination]}>
        {post?.media?.map((img) => {
          return (
          <SwiperSlide key={"slide-" + post.id + "-" + img?.id}>
          <img key={"img-" + post.id + "-" + img?.id} src={img?.src} />
          </SwiperSlide>
        )
      })
      }
        </Swiper>
      </div>
      <div className="PostActions">
        <div onClick={() => toggleLike()} className="PostActions__Like">
          <LikeIcon fill={like && like ? "#FD1D1D" : "#262626"} />
        </div>
      </div>
    </article>
  );
};

export default Post;
