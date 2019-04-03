import React from "react";

const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed`;

const VideoDetail = ({ video }) => {
  // console.log(`video detail: \n`, video);
  if (video === null) {
    return <div>Please do searching and select a video.</div>;
  }

  const videoSrc = `${YOUTUBE_EMBED_URL}/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
