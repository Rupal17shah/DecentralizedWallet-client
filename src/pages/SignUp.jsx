import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';





const defaultTheme = createTheme({

});

export default function SignInSide() {
    const [role, setRole] = React.useState('');
    const handleChangeDropDown = (event) => {
        setRole(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div>

            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={6}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers/blockchain)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 17,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" color="#000">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                                    id="name"
                                    label="Name "
                                    name="name"
                                    autoComplete="name"

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
                                <Box sx={{ minWidth: 400, color: '#000', mt: 2 }}>
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
                                            <MenuItem value={"Node"}><Typography color={"#000"}>Node</Typography></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>

                                    <Grid item>
                                        <Link to="/login" variant="body2">
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