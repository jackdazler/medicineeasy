import React from "react";
import styleBanner from "./cpbanner.module.scss";
import CpVideoPlayer from '../cp-videoplayer/CpVideoPlayer';
const CpVideoBanner = () => {
  return (
    <>
      <div className={`${styleBanner["cp-banner"]} 'typ-banner-video'}`}>
        <div className={styleBanner["video-banner-wrap"]}>
          <div className={styleBanner["visual"]}>
            <CpVideoPlayer/>
          </div>
          <div className="container">
            <div className={styleBanner["banner-title"]}>
              <h2 className={styleBanner["title"]}> Effortless listening</h2>
            </div>
            <div className={styleBanner["act-wrap"]}>
              <button className='btn-primary'>
                Explore products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CpVideoBanner;
