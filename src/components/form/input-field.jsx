import { TextField, useTheme } from "@mui/material";
import { FieldWraper } from "./field-wraper";

export const InputField = (props) => {
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
      />
    </FieldWraper>
  );
};
