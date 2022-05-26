import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import About from "../../components/About/About";
import { ContactContent, SecondaryHeader } from "../../styles/Styles";
import Donate from "../../assets/donate.jpg"


const AboutUs = () => {
  return (
    <div>

    <ContactContent className="about-us-container">
      <div className="we-left">
        <img src={Donate} alt="" />
      </div>
      <div className="we-right">
        <SecondaryHeader>Who we are</SecondaryHeader>
        <h4>We are here not for income, but for outcome</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem vero obcaecati doloremque perspiciatis, fugit accusantium facilis porro nobis amet. Dicta laborum commodi aut cum nostrum aspernatur quasi! Obcaecati veritatis distinctio nulla aperiam delectus nemo praesentium, fugiat voluptatum necessitatibus magnam omnis?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dignissimos? Ratione eligendi tenetur quae, qui expedita dolores odit natus neque.</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam, id ea assumenda iusto commodi libero consectetur impedit architecto sit nesciunt quis magni, amet voluptate aut esse accusamus maiores obcaecati?
      </div>
    </ContactContent>

      <About />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper-container"
      >
        <SwiperSlide className="slider-wrapper">
          <div className="slide-1">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              laudantium reprehenderit incidunt nisi assumenda accusamus nihil
              optio porro totam alias?
            </blockquote>
            <p>John Doe</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-wrapper">
          <div className="slide-2">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              laudantium reprehenderit incidunt nisi assumenda accusamus nihil
              optio porro totam alias?
            </blockquote>
            <p>John Doe</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-wrapper">
          <div className="slide-3">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              laudantium reprehenderit incidunt nisi assumenda accusamus nihil
              optio porro totam alias?
            </blockquote>
            <p>John Doe</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-wrapper">
          <div className="slide-4">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              laudantium reprehenderit incidunt nisi assumenda accusamus nihil
              optio porro totam alias?
            </blockquote>
            <p>John Doe</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutUs;
