import React from "react";
import {
  Box,
  Collapse,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { theme } from "@/themes";

// eslint-disable-next-line react/display-name
export const FieldWraper = React.memo((props) => {
  const { label, error, children, boxProps, labelProps } = props;

  return (
    <Box {...boxProps}>
      <FormControl fullWidth size="small">
        {label && (
          <FormLabel
            {...{
              sx: {
                marginBottom: 1,
                fontSize: theme.typography.pxToRem(14),
                fontWeight: 600,
                color: "text.secondary",
              },
              ...labelProps,
            }}
          >
            {label}
          </FormLabel>
        )}

        {children}
        <Collapse in={!!error?.message}>
          {error?.message && (
            <FormHelperText
              error={!!error?.message}
              role="alert"
              aria-label={error.message}
            >
              {error.message}
            </FormHelperText>
          )}
        </Collapse>
      </FormControl>
    </Box>
  );
});
