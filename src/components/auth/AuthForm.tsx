import { login, logout } from "../../features/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import { useFormik } from 'formik';
import { authFormValidationSchema } from "./AuthForm.types";


const AuthForm = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
    },
    validationSchema: authFormValidationSchema,
    onSubmit: (values) => {
      dispatch(login({ username: values.username, email: values.email }));
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
        {isAuthenticated ? (
          <Box data-testid="loggedIn-form-container">
            <Typography variant="h5">Welcome, {user?.username}!</Typography>
            <Typography variant="body1">Email: {user?.email}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
              sx={{ mt: 2 }}
              data-testid="logout-button"
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Box data-testid="not-loggedIn-form-container">
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ mt: 4 }}
                data-testid="login-button"
              >
                Login
              </Button>
            </form>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default AuthForm;
