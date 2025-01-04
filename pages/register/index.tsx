import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./index.module.css";
import { TextField, Button, Typography, Card, Paper } from "@mui/material";
import useCustomBreakpoint from "@/helpers/screenSizes";

interface RegisterFormInputs {
  name: string;
  email: string;
  phone: string;
  confirmPassword: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const breakpoints = useCustomBreakpoint();

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .matches(/^[+0-9]{10,15}$/, "Phone number is invalid")
      .required("Phone is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log("Form Data:", data);
  };

  const gradientClass = breakpoints.isMobile
    ? styles.mobileGradientBackground
    : styles.gradientBackground;

  return (
    <div className={styles.pageContainer}>
      <Paper className={gradientClass}>
        <Card className={styles.card}>
          <Typography variant="h4" className={styles.cardTitle}>
            Register
          </Typography>
          <Typography variant="subtitle1" className={styles.cardSubtitle}>
            Create your account
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
              <Typography className={styles.inputLabel}>Username</Typography>
              <TextField
                variant="outlined"
                fullWidth
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                InputProps={{ sx: { borderRadius: "16px", height: 56 } }}
              />
            </div>

            <div>
              <Typography className={styles.inputLabel}>Email</Typography>
              <TextField
                variant="outlined"
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{ sx: { borderRadius: "16px" } }}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.halfWidth}>
                <Typography className={styles.inputLabel}>Password</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{ sx: { borderRadius: "16px" } }}
                />
              </div>
              <div className={styles.halfWidth}>
                <Typography className={styles.inputLabel}>
                  Confirm Password
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="password"
                  {...register("confirmPassword")}
                  InputProps={{ sx: { borderRadius: "16px" } }}
                />
              </div>
            </div>

            <div>
              <Typography className={styles.inputLabel}>
                Phone Number
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                InputProps={{ sx: { borderRadius: "16px" } }}
              />
            </div>

            <Button
              className={styles.submitButton}

            >
              Register
            </Button>
          </form>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <Typography className={styles.loginText}>
            Already have an account?{" "}
            <a href="/login" className={styles.loginLink}>
              Login
            </a>
          </Typography>
        </Card>
      </Paper>
    </div>
  );
};

export default RegisterForm;
