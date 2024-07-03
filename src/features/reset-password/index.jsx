import { FormWraper } from "@/components/form/form-wraper";
import { theme } from "@/themes";
import { Box, Button, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { schemaResetPassword } from "./const";
import { useLogin } from "@/hooks/use-login";
import { storage } from "@/utils";
import { InputFieldPassword } from "@/components/form/input-field-password";
import PasswordChecklist from "react-password-checklist";
export const ResetPassword = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useLogin({});

  const handleSubmit = async (values) => {
    const { accessToken } = await mutateAsync(values);
    storage.setToken(accessToken);
    navigate("/");
  };

  return (
    <>
      <Box
        borderBottom={`1px solid ${theme.palette.common.grey30}`}
        sx={{ padding: { xs: 1.5, md: `24px 24px 16px 24px` } }}
      >
        <Typography fontSize={20} fontWeight={700}>
          Password Reset
        </Typography>
      </Box>
      <Box sx={{ padding: { xs: 1.5, md: `24px 24px 16px 24px` } }}>
        <FormWraper schema={schemaResetPassword} onSubmit={handleSubmit}>
          {({ register, formState: { errors }, getValues }) => {
            console.log("getValues", getValues());
            return (
              <Box display={"flex"} flexDirection={"column"} gap={2.5}>
                <InputFieldPassword
                  label="New Password"
                  registration={register("password")}
                  error={errors["password"]}
                />
                <InputFieldPassword
                  label="Confirm New Password"
                  registration={register("confirmPassword")}
                  error={errors["confirmPassword"]}
                />
                <PasswordChecklist
                  rules={[
                    "minLength",
                    "specialChar",
                    "number",
                    "capital",
                    "lowercase",
                    "match",
                  ]}
                  minLength={12}
                  value={getValues()?.password ?? ""}
                  valueAgain={getValues()?.confirmPassword ?? ""}
                  onChange={(isValid) => {
                    console.log("isValid", isValid);
                  }}
                  messages={{
                    minLength: "A minimum 12 characters",
                    capital: "At least 1 uppercase letter (A-Z)",
                    lowercase: "At least 1 lowercase letter (a-z)",
                    number: "At least 1 number (0-9)",
                    specialChar: "At least 1 special character ($@#)",
                    match: "Las contraseñas coinciden.",
                  }}
                />
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={!isEmpty(errors)}
                  >
                    Reset Password
                  </Button>
                </Box>
              </Box>
            );
          }}
        </FormWraper>
      </Box>
    </>
  );
};
