import { TextField } from "@mui/material";
import { useState } from "react";

const Input = ({
  name,
  type,
  label,
}: {
  name: string;
  type: string;
  label: string;
}) => {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "white" } }}
      InputProps={{
        style: {
          width: "300px",
          borderRadius: 10,
          fontSize: 20,
        },
        inputProps: {
          style: {
            color: "white", // Text color for the input field
          },
        },
      }}
      name={name}
      label={label}
      type={type}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default Input;
