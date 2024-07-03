import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";
import { FieldWraper } from "./field-wraper";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const InputFieldPassword = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { label, registration, error, boxProps, labelProps, ...inputProps } =
    props;

  const theme = useTheme();

  return (
    <FieldWraper
      label={label}
      error={error}
      boxProps={boxProps}
      labelProps={labelProps}
    >
      <TextField
        sx={{
          "& .MuiInputLabel-root.Mui-disabled": {
            color: theme.palette.text.darkGray,
          },
          "& .MuiInputBase-input.Mui-disabled": {
            "-webkit-text-fill-color": theme.palette.text.darkGray,
          },
        }}
        size="small"
        variant="filled"
        fullWidth
        error={!!error}
        {...inputProps}
        {...registration}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FieldWraper>
  );
};
