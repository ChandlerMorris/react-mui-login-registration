import { Button, FormControl, Link, Stack, TextField, Typography } from "@mui/material";

export default function Login() {
    return (
        <FormControl sx={{bgcolor: 'primary.main', color: 'secondary.main', padding: '8rem 6rem', border: '1px solid #000', textAlign: 'center'}}>
            <Typography variant="h2">Sign In</Typography>
            <Stack spacing={2} sx={{margin: '1rem 0'}}>
                <TextField id="outlined-basic" label="Name" variant="outlined" color="secondary" size="small" />
                <TextField id="outlined-basic" label="Email" variant="outlined" color="secondary" size="small" />
                <Button variant="outlined" color="secondary">Sign In</Button>
            </Stack>
            <Stack spacing={1} direction="row" sx={{marginBottom: '1rem'}}>
                <Typography variant="subtitle1">Don't have an account?</Typography>
                <Link href="" sx={{color: 'secondary.main', textDecorationColor: 'inherit'}}>Create an account</Link>
            </Stack>
        </FormControl>
    )
}