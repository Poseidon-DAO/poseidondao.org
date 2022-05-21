import React from "react";
import Avatar from "boring-avatars";

interface AvatarDisplayProps {
  name?: string;
  size: number | string;
  style?: any;
  avatar?: string;
}

export default function AvatarDisplay({
  avatar,
  style,
  size,
  name,
}: AvatarDisplayProps) {
  return avatar ? (
    <div style={style ? style : { borderRadius: "50%", overflow: "hidden" }}>
      <img
        alt="User avatar"
        src={avatar}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  ) : (
    <div>
      <Avatar
        size={size}
        variant="marble"
        colors={["#5CACC4", "#8CD19D", "#CEE879", "#FCB653", "#FF5254"]}
        name={"Margaret Brent"}
      />
    </div>
  );
}
