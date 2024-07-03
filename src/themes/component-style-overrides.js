export function componentStyleOverrides() {
  return {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          subtitle1: "h2",
          subtitle2: "h3",
          body1: "p",
          body2: "p",
          body3: "p",
          body4: "p",
          body5: "p",
          span: "span",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            padding: "16px 16px 16px 12px",
            borderRadius: 4,
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "16px",
            height: 40,
            "&.MuiButton-sizeSmall": {
              height: 32,
              fontSize: 14,
            },
            "&.Mui-disabled": {
              background: theme.palette.common.grey30,
            },
          };
        },
      },
    },
    // Custom height, placeholder input and select
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          return {
            // config textarea = inherit
            height: ownerState.multiline ? "inherit" : theme.spacing(5),
            maxHeight: ownerState.multiline ? "inherit" : theme.spacing(7),
            borderRadius: theme.spacing(0.5),
            "&.Mui-disabled": {
              backgroundColor: theme.palette.common.whiteSmoke,
            },
            "& input": {
              paddingTop: theme.spacing(1), // for auto-complete insert background color
              paddingBottom: theme.spacing(1), // for auto-complete insert background color
              paddingLeft: theme.spacing(1.25), // for auto-complete insert background color
              paddingRight: theme.spacing(1.25), // for auto-complete insert background color
              fontSize: theme.typography.pxToRem(16),
              lineHeight: "150%",
              fontWeight: theme.typography.fontWeightRegular,
            },

            "&.MuiFilledInput-root": {
              backgroundColor: `${theme.palette.common.grey10} !important`,
            },

            "&::before": {
              borderBottom: `1px solid ${theme.palette.common.grey50} !important`,
            },

            "& fieldset": {
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "theme.palette.text.title",
            },

            "&::placeholder": {
              color: theme.palette.text.disabled,
              opacity: 1,
            },
            "&::-moz-placeholder": {
              color: theme.palette.text.disabled,
              opacity: 1,
            },
            "&:-ms-input-placeholder": {
              color: theme.palette.text.disabled,
              opacity: 1,
            },
            "&::-webkit-input-placeholder": {
              color: theme.palette.text.disabled,
              opacity: 1,
            },
          };
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            "&.Mui-selected, &:hover td": {
              backgroundColor: `${theme.palette.secondary.light} !important`,
            },
          };
        },
      },
    },
  };
}
