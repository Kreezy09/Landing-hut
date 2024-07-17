import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";

function Join() {
  return (
    <div className="join">
      <Container>
        <AnimationTitles
          className="title mx-auto"
          title="Key Features of TMS"
        />
        <Swiper
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            998: {
              slidesPerView: 3,
            },
            1198: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">1</h4>
            <img src={require("../images/illustration/01.webp")} alt="img" />
            <AnimationTitles
              title="Rent Collection"
              className="mb-4 mt-5 h4"
            />
            <p className="gray-50">
              Simplify rent payments with secure and convenient M-Pesa 
              transactions.
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">2</h4>
            <img src={require("../images/illustration/02.webp")} alt="img" />
            <AnimationTitles
              title="Analytics"
              className=" mb-4 mt-5 h4"
            />
            <p className="gray-50">
              Gain valuable insights with detailed reports and analytics.
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">3</h4>
            <img src={require("../images/illustration/03.webp")} alt="img" />
            <AnimationTitles
              title="Properties"
              className=" mb-4 mt-5 h4"
            />
            <p className="gray-50">
              Handle multiple properties seamlessly within one platform.
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">4</h4>
            <img src={require("../images/illustration/04.webp")} alt="img" />
            <AnimationTitles
              title="Maintenance"
              className=" mb-4 mt-5 h4"
            />
            <p className="gray-50">
              Streamline maintenance requests for quick and effective resolutions.
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default Join;
