import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-3 w-52 border border-x-slate-300 shadow-md rounded-md cursor-pointer hover:shadow-2xl">
      <img className="rounded-lg" alt="videos" src={thumbnails.medium.url} />
         <ul>
          <li className="font-bold font-sans">{title}</li>
          <li className="font-serif font-semibold">{channelTitle}</li>
          <li className="font-extralight">{statistics.viewCount + " " + "views"}</li>
         </ul>
    </div>
  );
};

export default VideoCard;
