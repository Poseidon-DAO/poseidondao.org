import { Button } from "reactstrap";
import { ButtonTypes } from "types";

interface IButtonProps {
  type: ButtonTypes;
  text: string;
  onClick: () => void | any;
  style?: any;
  disabled?: boolean;
}

export default function CustomButton({
  type,
  onClick,
  style,
  text,
  disabled,
}: IButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      style={style ? style : {}}
      color={type}
    >
      {text}
    </Button>
  );
}
