import { useEffect, useState } from "react";

interface VideoProps {
    src: string,
    type: string,
    poster?: string
}

const Video = (props: VideoProps) => {
    const [allowVideo, setAllowVideo] = useState(false);
  
    useEffect(() => {
      setAllowVideo(true);
    }, []);

    const renderVideo = allowVideo && (
        <video
          controls
          muted
          loop
          autoPlay
          poster={props.poster}
        >
          <source
            src={props.src}
            type={props.type}
          />
        </video>
      )

    return (
        <div>
            {renderVideo}
        </div>
    );
}

export default Video;