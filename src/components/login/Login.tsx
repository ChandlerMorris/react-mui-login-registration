import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";

export default function Login() {
    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <FormControl sx={{bgcolor: 'primary.main', color: 'secondary.main', padding: '8rem 6rem', border: '1px solid #000', textAlign: 'center'}}>
            <Typography variant="h2">Sign In</Typography>
            <Stack spacing={2} sx={{margin: '1rem 0'}}>
                <TextField 
                    id="username" 
                    label="Username" 
                    variant="outlined" 
                    color="secondary" 
                    size="small" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                    type="text" 
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
                />
                <Button variant="outlined" color="secondary">Sign In</Button>
            </Stack>
            <Stack spacing={1} direction="row" sx={{marginBottom: '1rem'}}>
                <Typography variant="subtitle1">Don't have an account?</Typography>
                <Link href="" sx={{color: 'secondary.main', textDecorationColor: 'inherit'}}>Create an account</Link>
            </Stack>
        </FormControl>
    )
}