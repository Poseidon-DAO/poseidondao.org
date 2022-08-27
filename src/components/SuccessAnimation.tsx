import Lottie from "lottie-react";
import animation from "../assets/lottie/success.json";

export default function SuccessAnimation(): React.ReactElement {
  return (
    <Lottie
      animationData={animation}
      loop={false}
      autoplay
      style={{
        height: 40,
        width: 40,
      }}
    />
  );
}
