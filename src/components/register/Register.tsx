import { SetStateAction, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, Link, Stack, TextField, Typography } from "@mui/material";
import dayjs, { Dayjs } from 'dayjs';
import DateInput from "../dateInput/DateInput";

const Register = () => {
    const [firstName, setFirstName] = useState<String>('');
    const [lastName, setLastName] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [birthday, setBirthday] = useState<Dayjs | null>(dayjs());
    const handleUpdateBirthday = (date: SetStateAction<dayjs.Dayjs | null>) => setBirthday(date);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <Box sx={{ width: 500}}>
            <FormControl sx={{bgcolor: 'primary.main', color: 'secondary.main', padding: { xs: '8rem 2rem', md: '8rem 6rem'}, border: '1px solid #000', textAlign: 'center'}}>
                <Typography variant="h2">Sign Up</Typography>
                <Stack spacing={2} sx={{margin: '1rem 0'}}>
                    <Stack spacing={2} direction="row" sx={{margin: '1rem 0'}}>
                        <TextField 
                            id="firstName" 
                            label="First Name" 
                            variant="outlined" 
                            color="secondary" 
                            size="small" 
                            value={firstName} 
                            onChange={e => setFirstName(e.target.value)}
                            type="text" 
                            required
                        />
                        <TextField 
                            id="lastName" 
                            label="Last Name" 
                            variant="outlined" 
                            color="secondary" 
                            size="small" 
                            value={lastName} 
                            onChange={e => setLastName(e.target.value)}
                            type="text" 
                            required
                        />
                    </Stack>
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
                        sx={{ paddingRight: 0}}
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
                    <DateInput label="Date of Birth (MM/DD/YYYY)" date={birthday} setDate={handleUpdateBirthday} />
                    <Button variant="outlined" color="secondary">Sign Up</Button>
                </Stack>
                <Stack spacing={1} direction="row" sx={{marginBottom: '1rem', justifyContent: "center"}}>
                    <Typography variant="subtitle1">Already have an account?</Typography>
                    <Link href="/" sx={{color: 'secondary.main', textDecorationColor: 'inherit'}}>Sign In</Link>
                </Stack>
            </FormControl>
        </Box>
    )
}

export default Register;