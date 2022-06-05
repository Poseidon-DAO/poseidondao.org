import { Button } from "evergreen-ui";
import { ButtonTypes } from "types";

interface IButtonProps {
  type: ButtonTypes;
  text: string;
  onClick: () => void | any;
  style?: any;
  disabled?: boolean;
  appearance?: string;
  backgroundColor?: string;
  border?: string;
}

export default function CustomButton({
  type,
  onClick,
  style,
  text,
  disabled,
  appearance,
  backgroundColor,
  border,
}: IButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      style={style ? style : {}}
      intent={type}
      appearance={appearance}
      backgroundColor={backgroundColor}
      border={border}
    >
      {text}
    </Button>
  );
}
