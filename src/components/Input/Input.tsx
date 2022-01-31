import { BaseTextFieldProps } from "@mui/material";
import { ChangeEventHandler } from "react";
import { StyledTextField } from "./Input.style";

interface Input extends BaseTextFieldProps {
  value: string;
  rows?: number;
  required?: boolean;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({
  value,
  rows,
  required,
  onChangeHandler,
  ...extraProps
}: Input) => {
  return (
    <StyledTextField
      value={value}
      onChange={onChangeHandler}
      multiline={Boolean(rows)}
      rows={rows}
      fullWidth
      required={required}
      {...extraProps}
    />
  );
};

export default Input;
