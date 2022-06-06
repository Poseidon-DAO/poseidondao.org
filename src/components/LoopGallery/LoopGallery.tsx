import Image from "next/image";
import { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const LoopGallery = (props: any) => {
  const settings = useMemo(
    () => ({
      dots: false,
      className: "center",
      centerMode: true,
      adaptiveHeight: true,
      autoplay: props.autoplay !== undefined ? props.autoplay : true,
      autoplaySpeed: props.autoplaySpeed || 500,
      infinite: true,
      centerPadding: 0,
      rtl: props.rtl !== undefined ? props.autoplay : false,
      speed: props.speed || 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <></>,
      prevArrow: <></>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {},
        },
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
          },
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
          },
        },
      ],
    }),
    [props]
  );

  return (
    <Slider
      key={props.key}
      {...settings}
      // @ts-ignore
      style={{
        marginBottom: "1rem",
        transform: props.skew,
        width: props.isMobile ? '100vw' : "110%",
        height: "fit-content",
        marginLeft: props.isMobile ? '0' :  "-5%",
      }}
    >
      {props.imgArray.map((i: string) => (
        <div style={{ height: '100%', width: '100%', }}>
          <Image
            key={i}
            alt="..."
            width={props.isMobile ? 500 : 180}
            height={props.isMobile ? 500 : 180}
            src={`/img/collection/${i}`}
          />
        </div>
      ))}
    </Slider>
  )
};

export default LoopGallery;
