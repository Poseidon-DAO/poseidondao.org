import Lottie from "lottie-react";
import animation from "../assets/lottie/success.json";

export default function SuccessAnimation(): React.ReactElement {
  return (
    <Lottie
      animationData={animation}
      loop={false}
      autoplay
      height={400}
      width={400}
    />
  );
}
