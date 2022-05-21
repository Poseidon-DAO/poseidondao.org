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
          settings: {},
        },
        {
          breakpoint: 480,
          settings: {},
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
      style={{ width: "100%", marginBottom: '1rem', transform: props.scew }}
    >
      {props.imgArray.map((i: string) => (
        <Image
          key={i}
          alt="..."
          width={180}
          height={180}
          className="img-fluid floating img-gallery"
          src={`/img/collection/${i}`}
        />
        ))}
    </Slider>
  );
};

export default LoopGallery;
