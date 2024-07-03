import { FormWraper } from "@/components/form/form-wraper";
import { theme } from "@/themes";
import { Box, Button, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { schemaForgotPassword } from "./const";
import { useLogin } from "@/hooks/use-login";
import { storage } from "@/utils";
import ReCAPTCHA from "react-google-recaptcha";
import { InputField } from "@/components/form";
import { useState } from "react";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useLogin({});
  const [isVerifyCapt, setIsVerifyCapt] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(true);

  const handleChangeCaptcha = () => {
    setIsVerifyCapt(true);
  };

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
        <FormWraper schema={schemaForgotPassword} onSubmit={handleSubmit}>
          {({ register, formState: { errors }, getValues }) => {
            return (
              <Box display={"flex"} flexDirection={"column"} gap={2.5}>
                {isSubmitted ? (
                  <>
                    <Typography fontSize={14}>
                      We have sent an email to <b>{getValues()?.email}</b> with
                      instructions on how to reset your password. If you do not
                      receive the email within a few minutes, please check your
                      spam folder.
                    </Typography>
                    <Typography fontSize={14}>
                      In case you have not received any email, please{" "}
                      <Link to="#">contact us</Link> for further assistance.
                    </Typography>
                    <Button type="submit" variant="contained" fullWidth>
                      Back to Log in
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography fontSize={14}>
                      Enter the email address associated with your account and
                      we will send you a link to reset your password.
                    </Typography>
                    <Box>
                      <InputField
                        label="Email Address"
                        registration={register("email")}
                        error={errors["email"]}
                      />
                    </Box>
                    <ReCAPTCHA
                      onExpired={() => setIsVerifyCapt(false)}
                      onChange={handleChangeCaptcha}
                      sitekey="6Lc5iYcoAAAAADtwPIK9FQmrM1Y8edanAAErIYS9"
                    />
                    <Box>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={!isEmpty(errors) || !isVerifyCapt}
                      >
                        Reset Password
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
            );
          }}
        </FormWraper>
      </Box>
    </>
  );
};
