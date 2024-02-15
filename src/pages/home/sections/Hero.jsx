import { HeroImageOne } from "../../../assets/";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

const Hero = () => {
  SwiperCore.use([Navigation]);

  const imageUrls = [HeroImageOne, HeroImageOne, HeroImageOne, HeroImageOne];
  return (
    <div className="">
      <Swiper navigation>
        {imageUrls.map((url) => (
          <SwiperSlide key={url}>
            <div
              className="px-16 pt-32 h-[550px] "
              style={{
                background: `url(${url}) center no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <Heading />
              <Moto />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Heading = () => {
  return (
    <h1 className="text-[64px] text-semibold text-white w-1/3 flex-wrap">
      ሕብረት ትራንስፖርት አክሲዮን ማህበር
    </h1>
  );
};

const Moto = () => {
  return <h1 className="text-xl text-semibold ">በሕብረት ለፍላጎቶ ተደራሽ እንሆናለን </h1>;
};

export default Hero;
