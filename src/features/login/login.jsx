import { axios } from "@/lib";

import { InputField } from "@/components/form";
import { FormWraper } from "@/components/form/form-wraper";
import { InputFieldPassword } from "@/components/form/input-field-password";
import { theme } from "@/themes";
import { Box, Button, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { schemaLogin } from "./const";
import { useLogin } from "@/hooks/use-login";
import { storage } from "@/utils";
export const LoginForm = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useLogin({});

  const handleSubmit = async (values) => {
    const { accessToken } = await mutateAsync(values);
    storage.setToken(accessToken);
    navigate("/");
  };
  const test = async () => {
    // axios
    //   .get("/profile")
    //   .then(function (response) {
    //     console.log(response);
    //   });
    let rLogin = await axios.post("/auth/login", {
      email: "admin@gmail.com",
      password: "admin",
    });
    console.log("rLogin", rLogin);
    let rAuth = await axios.get("/auth", {
      headers: { authorization: `Bearer ${rLogin.accessToken}` },
    });
    console.log("rAuth", rAuth);
  };

  return (
    <>
      <Box
        borderBottom={`1px solid ${theme.palette.common.grey30}`}
        sx={{ padding: { xs: 1.5, md: `24px 24px 16px 24px` } }}
      >
        <Typography fontSize={20} fontWeight={700} onClick={test}>
          Log in to DLS@internet
        </Typography>
      </Box>
      <Box sx={{ padding: { xs: 1.5, md: `24px 24px 16px 24px` } }}>
        <FormWraper schema={schemaLogin} onSubmit={handleSubmit}>
          {({ register, formState: { errors } }) => {
            return (
              <Box display={"flex"} flexDirection={"column"} gap={2.5}>
                <InputField
                  label="Email Address"
                  registration={register("email")}
                  error={errors["email"]}
                />
                <Box>
                  <InputFieldPassword
                    label="Password"
                    registration={register("password")}
                    error={errors["password"]}
                  />
                  <Box mt={1} sx={{ float: "right" }}>
                    <Box
                      sx={{ cursor: "pointer" }}
                      onClick={() => navigate("/forgot-password")}
                      color={theme.palette.primary.main}
                    >
                      Forgot Password
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={!isEmpty(errors)}
                  >
                    Login
                  </Button>
                </Box>
                <Typography
                  fontSize={14}
                  display="flex"
                  align="center"
                  justifyContent="center"
                  gap={1}
                >
                  DSTA staff?{" "}
                  <Typography fontSize={12} fontWeight={600}>
                    <Link>Log in from here instead</Link>
                  </Typography>
                </Typography>
              </Box>
            );
          }}
        </FormWraper>
      </Box>
    </>
  );
};
