import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import axios from "../services/api";
import axiosInst from "../services/api";
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

export default function LogInSide({ setIsAuthenticated }) {
  const [login, setLogin] = React.useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const data = new FormData(e.currentTarget);
    setLogin({ email: data.get('email'), password: data.get('password') });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(login);
    try {
      const response = await axiosInst.post('/login', login);
      // console.log(response);
      if (response) {
        sessionStorage.setItem("token", response.data.accessToken);
        setIsAuthenticated(true);

        navigate("/dashboard");
        // console.log(response.data.accessToken);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers/blockchain)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            square
            m={"auto"}
          >
            <Box
              sx={{
                // my: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" color="#000">
                Log in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                onChange={handleChange}
                sx={{ mt: 1, minWidth: 400 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {/* <Box sx={{ minWidth: 400, color: '#000' }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={role}
                                            label="Role"
                                            onChange={handleChangeDropDown}
                                        >
                                            <MenuItem value={"Miner"}><Typography color={"#000"}>Miner</Typography></MenuItem>
                                            <MenuItem value={"User"}><Typography color={"#000"}>User</Typography></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box> */}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Log In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/signup" variant="body2">
                      <Typography color={"#000"}>
                        Don't have an account? Sign Up!!!
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
