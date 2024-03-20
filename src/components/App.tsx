import { Box, Grid, Typography } from "@mui/material";

export default function App() {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Box sx={{bgcolor: 'primary.main', color: 'secondary.main', padding: '2rem', border: '1px solid #000'}}>
                    <Typography variant="h3">Sign In</Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{bgcolor: 'primary.main', color: 'secondary.main', padding: '2rem', border: '1px solid #000'}}>
                    <Typography variant="h3">Create Account</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}