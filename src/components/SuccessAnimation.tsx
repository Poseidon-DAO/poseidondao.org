import Lottie from "react-lottie";
import animation from "../assets/lottie/success.json";

export default function SuccessAnimation(): React.ReactElement {
  return (
    <Lottie
      options={{
        loop: false,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height={400}
      width={400}
    />
  );
}
