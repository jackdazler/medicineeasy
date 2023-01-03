import React,{useRef,useEffect} from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-youtube/dist/Youtube.min.js';
// import 'videojs-vimeo-tech/dist/Vimeo.min.js';
const CpVideoPlayer = (props) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    // const { options, onReady } = props;
 const options = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    muted:true,
    sources: [{
        src:"https://media.sonos.com/videos/znqtjj88/production/ac52e0abee7c40598065c62045b445d59798a653-bg-720p.av1",
        // src:"https://media.sonos.com/videos/znqtjj88/production/e4ffa9cd65442d59f07af59cc730003ded8c327c-bg-360p.mp4",
      type: 'video/mp4',
    }]
  };
  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;
      videojs(videoElement, options, () => {
        // videojs.log('player is ready');
        // onReady && onReady(player);
      });
    //   if (playerRefcurrent) (playerRef.current = playerRefcurrent);
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.play();
      player.src(options.sources);
    }
  },[playerRef]);


//   Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);
  return (
    <>
       <div data-vjs-player>
        <video ref={videoRef} className="video-js" playsInline muted autoPlay loop/>
      </div>
    </>
  );
}

export default CpVideoPlayer