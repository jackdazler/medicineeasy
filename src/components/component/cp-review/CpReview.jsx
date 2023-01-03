import React from "react";
import styleReview from "./cpreview.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// import 'swiper/css';
const CpReview = () => {
  return (
    <>
      <div className={"container"}>
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          className="bs-swiper"
          navigation={true}
          slidesPerView={1}
          centeredSlides={true}
        >
          <SwiperSlide>
            <div className={styleReview["review-wrap"]}>
              <div className={styleReview["brand-wrap"]}>
                <img
                  src="https://media.sonos.com/images/znqtjj88/production/151a243866760ec72cf4b415cf48cae88110fde8-280x36.svg?w=280&q=75&fit=clip&auto=format"
                  alt=""
                />
              </div>
              <div className={styleReview["comments"]}>
                <p
                  className={styleReview["comment"]}
                >{`"A wireless speaker system is the easiest way to listen to music, podcasts and other audio entertainment in more than one room at a time, and we think Sonos is the best option" `}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styleReview["review-wrap"]}>
              <div className={styleReview["brand-wrap"]}>
                <img
                  src="https://media.sonos.com/images/znqtjj88/production/151a243866760ec72cf4b415cf48cae88110fde8-280x36.svg?w=280&q=75&fit=clip&auto=format"
                  alt=""
                />
              </div>
              <div className={styleReview["comments"]}>
                <p
                  className={styleReview["comment"]}
                >{`"A wireless speaker system is the easiest way to listen to music, podcasts and other audio entertainment in more than one room at a time, and we think Sonos is the best option" `}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styleReview["review-wrap"]}>
              <div className={styleReview["brand-wrap"]}>
                <img
                  src="https://media.sonos.com/images/znqtjj88/production/151a243866760ec72cf4b415cf48cae88110fde8-280x36.svg?w=280&q=75&fit=clip&auto=format"
                  alt=""
                />
              </div>
              <div className={styleReview["comments"]}>
                <p
                  className={styleReview["comment"]}
                >{`"A wireless speaker system is the easiest way to listen to music, podcasts and other audio entertainment in more than one room at a time, and we think Sonos is the best option" `}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CpReview;
