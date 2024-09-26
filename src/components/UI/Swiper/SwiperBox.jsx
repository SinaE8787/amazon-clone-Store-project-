import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../pages/Home/Home.module.css";
import img1 from "../../../assets/images/image1.jpg";
import img2 from "../../../assets/images/image2.jpg";
import img3 from "../../../assets/images/image3.jpg";
import img4 from "../../../assets/images/image4.jpg";

export const SwiperBox = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} />
      </SwiperSlide>
      <div className="image-shadow"></div>
    </Swiper>
  );
};
