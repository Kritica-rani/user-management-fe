import React from "react";
import { TextField } from "@mui/material";

interface InputBoxProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  error = false,
  helperText = "",
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required={required}
      error={error}
      helperText={error ? helperText : " "}
      variant="outlined"
      margin="normal"
    />
  );
};

export default InputBox;
