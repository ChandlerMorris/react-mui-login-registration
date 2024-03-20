import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";

const Login = () => {
    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <Box sx={{ width: 500}}>
            <FormControl sx={{bgcolor: 'primary.main', color: 'secondary.main', padding: '8rem 6rem', border: '1px solid #000', textAlign: 'center'}}>
                <Typography variant="h2">Sign In</Typography>
                <Stack spacing={2} sx={{margin: '1rem 0'}}>
                    <TextField 
                        id="email" 
                        label="Email" 
                        variant="outlined" 
                        color="secondary" 
                        size="small" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        type="text" 
                        required
                    />
                    <TextField 
                        id="password" 
                        label="Password" 
                        variant="outlined" 
                        color="secondary" 
                        size="small" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            style: {
                                paddingRight: 2
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        required
                    />
                    <Button variant="outlined" color="secondary">Sign In</Button>
                </Stack>
                <Stack spacing={1} direction="row" sx={{marginBottom: '1rem', justifyContent: "center"}}>
                    <Typography variant="subtitle1">Don't have an account?</Typography>
                    <Link href="/register" sx={{color: 'secondary.main', textDecorationColor: 'inherit'}}>Create an account</Link>
                </Stack>
            </FormControl>
        </Box>
    )
}

export default Login;