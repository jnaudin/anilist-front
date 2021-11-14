import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  label: string;
}

export const Button = ({ size = "medium", label, ...props }: ButtonProps) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};
